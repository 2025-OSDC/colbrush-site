import { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { useTheme } from 'colbrush/client';
import GraphContainer from './GraphContainer';

interface ChartData {
  category: string;
  value: number;
  color: string;
}

const DonutChart = () => {

  const theme = useTheme().theme;

  const rootStyle = getComputedStyle(document.documentElement);

  const data = [
    { category: "잠재 고객", value: 54, color: rootStyle.getPropertyValue('--color-blue').trim() },
    { category: "충성 고객", value: 20, color: rootStyle.getPropertyValue('--color-light-green').trim() },
    { category: "신규 고객", value: 26, color: rootStyle.getPropertyValue('--color-red').trim() }
  ]

  const chartRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<am5.Root | null>(null);

  useEffect(() => {

    if (!chartRef.current) return;
    // amCharts 루트 생성
    const root = am5.Root.new(chartRef.current);
    rootRef.current = root;

    // 애니메이션 테마 설정
    root.setThemes([am5themes_Animated.new(root)]);

    // 파이 차트 생성
    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        innerRadius: am5.percent(60) // 도넛 모양
      })
    );

    // 시리즈 생성
    const series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        alignLabels: false
      })
    );

    // 라벨과 틱 숨기기
    series.labels.template.set("visible", false);
    series.ticks.template.set("visible", false);

    // 슬라이스 스타일링
    series.slices.template.setAll({
      strokeWidth: 0,
      cornerRadius: 8,
    });

    // 호버 효과
    series.slices.template.states.create("hover", {
      scale: 1.05
    });

    // 색상 적용
    series.slices.template.adapters.add("fill", function (fill, target) {
      const dataItem = target.dataItem;
      if (dataItem) {
        const context = dataItem.dataContext as ChartData
        return am5.color(context.color);
      }
      return fill;
    });
    
    series.slices.template.adapters.add("stroke", function (stroke, target) {
      const dataItem = target.dataItem;
      if (dataItem) {
        const context = dataItem.dataContext as ChartData
        return am5.color(context.color);
      }
      return stroke;
    });

    // 데이터 설정
    series.data.setAll(data);

    // 애니메이션
    series.appear(1000, 100);

    // 정리 함수
    return () => {
      if (rootRef.current) {
        rootRef.current.dispose();
      }
    };
  }, [theme]);

  return (
    <GraphContainer>
      <div className={`flex flex-row items-center justify-between mb-4`}>
        <p className={`lg:text-[18px] max-lg:text-[14px] font-bold text-gray-100 text-center`}>
          방문자 분석
        </p>
        <p className={`text-[12px] max-lg:text-[10px] rounded-[4px] bg-gray-200 px-2 py-1 text-gray-100`}>Today</p>
      </div>

      <div className={`flex items-center justify-center`}>
        <div
          ref={chartRef}
          className="md:w-full max-h-[300px] aspect-[5/4] mb-2 max-md:w-[50%]"
        />
      </div>

      <div className="text-[16px] max-lg:text-[14px] p-2">
        <div className="flex justify-center gap-4 flex-col">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 max-lg:w-2.5 max-lg:h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-white font-light w-full flex flex-row justify-between items-center">
                <p>{item.category}</p>
                <p>{item.value}%</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </GraphContainer>
  );
};

export default DonutChart;
