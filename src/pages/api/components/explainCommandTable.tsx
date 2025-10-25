import Code from "../../../components/code";

export function ExplaneCommandTable() {
  const thStyle =
    "text-start font-medium text-gray-100 text-[18px] py-[21px] border-b-[1px] border-b-gray-200";
  const tdStyle1 = "py-[10px] px-[28px] whitespace-nowrap";
  const tdStyle2 =
    "font-medium text-gray-100 pr-[28px] min-w-[300px] text-sm sm:text-[18px]";
  const trStyle = "py-[10px]";

  return (
    <table className="border-separate border-spacing-y-[10px] rounded-[13px] bg-gray-300">
      <thead>
        <tr className="px-[17px]">
          <th className={`${thStyle} px-[28px]`}>명령어</th>
          <th className={`${thStyle}`}>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr className={trStyle}>
          <td className={tdStyle1}>
            <Code>colbrush --generate</Code>
          </td>
          <td className={tdStyle2}>
            색각 이상자를 위한 접근성 테마를 생성합니다. (기본 명령어)
          </td>
        </tr>
        <tr>
          <td className={tdStyle1}>
            <Code>colbrush --doctor</Code>
          </td>
          <td className={tdStyle2}>
            시스템 진단을 실행하여 환경 문제를 확인합니다.
          </td>
        </tr>
        <tr>
          <td className={tdStyle1}>
            <Code>colbrush --help</Code>
          </td>
          <td className={tdStyle2}>
            사용 가능한 모든 명령어와 옵션에 대한 도움말 메시지를 표시합니다.
          </td>
        </tr>
        <tr>
          <td className={tdStyle1}>
            <Code>colbrush --version</Code>
          </td>
          <td className={tdStyle2}>
            현재 설치된 Colbrush의 버전 정보 (v1.6.0)를 표시합니다.
          </td>
        </tr>
      </tbody>
    </table>
  );
}
