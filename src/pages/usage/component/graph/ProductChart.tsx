import { Products } from "../../mocks/usage";
import GraphContainer from "./GraphContainer";

const ProductChart = () => {
  return (
    <GraphContainer>
      <p
        className={`mb-4 text-start text-gray-100 max-lg:text-[14px] lg:text-[18px]`}
      >
        상품 목록
      </p>
      <div className={`h-full w-full pt-4 text-[14px] max-lg:text-[12px]`}>
        <div
          className={`mb-2 flex w-full flex-row justify-around font-light text-gray-100`}
        >
          <p className={`w-[12%]`}>번호</p>
          <p className={`w-[18%]`}>상품명</p>
          <p className={`w-[36%]`}>판매 개수</p>
          <p className={`w-[18%]`}>판매증가</p>
        </div>
        <div className={`h-[1px] bg-gray-100`} />
        <div className={`flex h-full flex-col`}>
          {Products.map((product, index) => {
            return (
              <div key={product.id}>
                <div
                  className={`flex w-full flex-row items-center justify-around py-4 font-light text-gray-100`}
                >
                  <p className={`w-[12%]`}>{product.id}</p>
                  <p className={`w-[18%]`}>{product.name}</p>
                  <div className={`rounded-4 h-1 w-[36%] ${product.bgColor}`}>
                    <div
                      className={`h-full ${product.barColor}`}
                      style={{ width: `${product.count}%` }}
                    />
                  </div>
                  <p className={`w-[18%]`}>{product.count}%</p>
                </div>
                {Products.length > index + 1 && (
                  <div className={`h-[1px] bg-gray-100`} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </GraphContainer>
  );
};

export default ProductChart;
