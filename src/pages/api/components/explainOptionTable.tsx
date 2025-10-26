import Code from "../../../components/code";

export function ExplaneOptionTable() {
  const thStyle =
    "text-start font-medium text-gray-100 text-[18px] py-[21px] border-b-[1px] border-b-gray-200";
  const tdStyle1 = "py-[10px] px-[28px] whitespace-nowrap";
  const tdStyle2 =
    "font-medium text-gray-100 pr-[28px] min-w-[260px] text-sm sm:text-[18px]";
  const trStyle = "py-[10px]";

  return (
    <table className="border-separate border-spacing-y-[10px] rounded-[13px] bg-gray-300">
      <thead>
        <tr className="px-[17px]">
          <th className={`${thStyle} pl-[28px]`}>옵션</th>
          <th className={`${thStyle}`}>설명</th>
          <th className={`${thStyle} pr-[28px]`}>기본값</th>
        </tr>
      </thead>
      <tbody>
        <tr className={trStyle}>
          <td className={tdStyle1}>
            <Code>{`--css=<path>`}</Code>
          </td>
          <td className={tdStyle2}>
            테마를 생성할 대상 CSS 파일 경로를 지정합니다.
          </td>
          <td className="py-[10px] pr-[28px] whitespace-nowrap">
            <Code>src/index.css</Code>
          </td>
        </tr>
        <tr>
          <td className={tdStyle1}>
            <Code>--no-color</Code>
          </td>
          <td className={tdStyle2}>CLI 출력 시 색상 사용을 비활성화합니다.</td>
        </tr>
        <tr>
          <td className={tdStyle1}>
            <Code>{`--json=<path>`}</Code>
          </td>
          <td className={tdStyle2}>
            상세 리포트를 지정된 경로에 JSON 파일로 저장합니다.
          </td>
        </tr>
      </tbody>
    </table>
  );
}
