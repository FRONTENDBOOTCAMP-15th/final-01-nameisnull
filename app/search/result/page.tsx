/* 검색 결과 페이지 */
'use client';

import UnderBar from '@/components/common/Footer';
import ProductList from '@/components/common/ProductList';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SearchResultPage() {
  const goBack = useRouter();
  return (
    <>
      <div className="font-pretendard pb-15">
        <header>
          <button
            type="button"
            onClick={() => goBack.back()}
            aria-label="뒤로 가기"
            className="font-pretendard flex flex-row gap-3.5 mt-4.5 ml-5.5 items-center"
          >
            <Image src="/icons/arrow-left.svg" alt="" width={8} height={16} />
            <span className="leading-none mb-0.5">AI 검색 결과</span>
          </button>
        </header>
        <section>
          <div className="flex flex-row items-center gap-1.5 mt-8 ml-4.75">
            <Image
              src="/icons/aisearch-sparkle.svg"
              alt=""
              width={25}
              height={25}
            />
            <p className="text-br-button-disabled-text leading-6 text-[13px]">
              <span className="text-br-primary-500">
                &quot;말랑한 간식&quot;
              </span>{' '}
              분석 결과 <br /> 총 5개의 맞춤 상품을 찾았습니다.
            </p>
          </div>
        </section>
        <main className="px-4 mt-7.25">
          <p className="text-[18px]">AI 추천 상품</p>
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
          <button
            type="button"
            className="w-full h-12 rounded-xl bg-br-button-more-bg text-br-button-more-text mt-5 mb-13"
          >
            일반 검색 결과 더보기
          </button>
        </main>

        <UnderBar />
      </div>
    </>
  );
}
