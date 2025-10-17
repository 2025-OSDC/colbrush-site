import { Products } from "../../mocks/usage"
import GraphContainer from "./GraphContainer";

const ProductChart = () => {

  return (
    <GraphContainer>
      <p className={`text-start mb-4 lg:text-[18px] max-lg:text-[14px] text-gray-100`}>상품 목록</p>
      <div className={`w-full h-full text-[14px] max-lg:text-[12px] pt-4`}>
        <div className={`w-full flex flex-row justify-around text-gray-100 font-light mb-2`}>
          <p className={`w-[12%]`}>번호</p>
          <p className={`w-[18%]`}>상품명</p>
          <p className={`w-[36%]`}>판매 개수</p>
          <p className={`w-[18%]`}>판매증가</p>
        </div>
        <div className={`bg-gray-100 h-[1px]`} />
        <div className={`h-full flex flex-col`}>
          {Products.map((product, index) => {
            return (
              <div key={product.id}>
                <div className={`w-full flex flex-row justify-around items-center text-gray-100 font-light py-4`}>
                  <p className={`w-[12%]`}>{product.id}</p>
                  <p className={`w-[18%]`}>{product.name}</p>
                  <div className={`w-[36%] h-1 rounded-4 ${product.bgColor}`}>
                    <div className={`h-full ${product.barColor}`} style={{ width: `${product.count}%` }} />
                  </div>
                  <p className={`w-[18%]`}>{product.count}%</p>
                </div>
                {Products.length > index + 1 && <div className={`bg-gray-100 h-[1px]`} />}
              </div>
            )
          })}
        </div>
      </div>
    </GraphContainer>
  )
}

export default ProductChart;
