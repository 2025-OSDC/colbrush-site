import { useEffect } from "react"
import * as am5 from "@amcharts/amcharts5"
import * as am5map from "@amcharts/amcharts5/map"
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"
import { useTheme } from "colbrush/client"
import GraphContainer from "./GraphContainer"

const MapChart = () => {

  const rootStyle = getComputedStyle(document.documentElement);
  const colors = {
    red: rootStyle.getPropertyValue('--color-deep-red').trim(),
    yellow: rootStyle.getPropertyValue('--color-yellow').trim(),
    green: rootStyle.getPropertyValue('--color-green').trim(),
    blue: rootStyle.getPropertyValue('--color-deep-blue').trim(),
    purple: rootStyle.getPropertyValue('--color-purple').trim(),
  }

  const theme = useTheme().theme;

  useEffect(() => {
    // Root 생성
    const root = am5.Root.new("mapdiv")

    // 배경 흰색 설정 (Rectangle 사용)
    root._rootContainer.set(
      "background",
      am5.Rectangle.new(root, {
        fill: am5.color(0xffffff),
        fillOpacity: 1
      })
    )

    root.setThemes([am5themes_Animated.new(root)])

    // 차트 생성
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "none",
        panY: "none",
        projection: am5map.geoMercator(),
        wheelX: "none",
        wheelY: "none",
      })
    )

    // 기본 국가 시리즈
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"], // 남극 제외
      })
    )

    // 기본 국가 색상 (회색)
    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(0xececec),
      stroke: am5.color(0xececec),
      strokeOpacity: 0,
    })

    // 특정 국가 색상 변경
    polygonSeries.mapPolygons.template.adapters.add("fill", (fill, target) => {
      const context = target.dataItem?.dataContext as { id?: string }
      const id = context.id;
      if (id === "US") return am5.color(colors.yellow)
      if (id === "BR") return am5.color(colors.red)
      if (id === "CD") return am5.color(colors.blue)
      if (id === "SA") return am5.color(colors.green)
      if (id === "CN") return am5.color(colors.purple)
      return fill
    })

    // 언마운트 시 메모리 해제
    return () => {
      root.dispose()
    }
  }, [theme])

  return (
    <GraphContainer>
      <p className={`lg:text-[18px] max-lg:text-[14px] text-start mb-4 text-gray-100`}>국가별 통계</p>
      <div className={`grow shrink-0 flex items-center justify-center`}>
        <div id="mapdiv" className={`w-full aspect-5/3`} />
      </div>
    </GraphContainer>
  )
}

export default MapChart
