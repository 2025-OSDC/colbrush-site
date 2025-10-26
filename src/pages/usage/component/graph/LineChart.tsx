import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useTheme } from "colbrush/client";
import GraphContainer from "./GraphContainer";

const data = [
  { month: "1월", dormant: 380, loyal: 320, new: 340 },
  { month: "2월", dormant: 360, loyal: 280, new: 400 },
  { month: "3월", dormant: 310, loyal: 250, new: 420 },
  { month: "4월", dormant: 280, loyal: 210, new: 390 },
  { month: "5월", dormant: 250, loyal: 230, new: 320 },
  { month: "6월", dormant: 290, loyal: 310, new: 260 },
  { month: "7월", dormant: 330, loyal: 380, new: 250 },
  { month: "8월", dormant: 370, loyal: 410, new: 300 },
  { month: "9월", dormant: 350, loyal: 390, new: 340 },
  { month: "10월", dormant: 290, loyal: 350, new: 320 },
  { month: "11월", dormant: 270, loyal: 340, new: 315 },
  { month: "12월", dormant: 280, loyal: 350, new: 310 },
];

function LineChart() {
  const theme = useTheme().theme;

  const rootStyle = getComputedStyle(document.documentElement);

  useEffect(() => {
    const root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 0,
      }),
    );

    chart
      ?.get("colors")
      ?.set("colors", [
        am5.color(rootStyle.getPropertyValue("--color-blue")),
        am5.color(rootStyle.getPropertyValue("--color-light-green")),
        am5.color(rootStyle.getPropertyValue("--color-red")),
      ]);

    const xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 40, // 틱 간격 조정
    });
    xRenderer.labels.template.setAll({
      fontFamily: "Pretendard Variable",
      fontSize: 12,
      marginLeft: 10,
      centerX: 1,
      textAlign: "right",
      oversizedBehavior: "wrap", // 글자가 넘칠 경우 줄바꿈
      fill: am5.color(rootStyle.getPropertyValue("--color-gray-100")),
    });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "month",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      }),
    );
    xAxis.data.setAll(data);

    const yRenderer = am5xy.AxisRendererY.new(root, {
      minGridDistance: 50,
    });

    yRenderer.labels.template.setAll({
      fontFamily: "Pretendard Variable",
      fontSize: 12,
      fill: am5.color(rootStyle.getPropertyValue("--color-gray-100")),
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: yRenderer,
      }),
    );

    function createSeries(name: string, field: string, colorIndex: number) {
      const series = chart.series.push(
        am5xy.SmoothedXLineSeries.new(root, {
          name,
          xAxis,
          yAxis,
          valueYField: field,
          categoryXField: "month",
          tension: 0.5,
          stroke: chart?.get("colors")?.getIndex(colorIndex),
          fill: chart?.get("colors")?.getIndex(colorIndex),
          tooltip: am5.Tooltip.new(root, { labelText: "{name}: {valueY}" }),
        }),
      );
      series.data.setAll(data);
      series.strokes.template.setAll({ strokeWidth: 4 });
    }

    createSeries("잠재고객", "dormant", 0);
    createSeries("충성고객", "loyal", 1);
    createSeries("신규고객", "new", 2);

    chart.set("cursor", am5xy.XYCursor.new(root, {}));
    chart.children.push(am5.Legend.new(root, { centerX: am5.p50, x: am5.p50 }));

    return () => {
      root.dispose();
    };
  }, [theme]);

  return (
    <GraphContainer className={`min-h-[300px]`}>
      <p
        className={`mb-4 text-start text-gray-100 max-lg:text-[14px] lg:text-[18px]`}
      >
        방문자 분석
      </p>
      <div id="chartdiv" className={`w-full grow`} />
      <div></div>
    </GraphContainer>
  );
}

export default LineChart;
