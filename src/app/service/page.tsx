import React from "react";

const Service = () => {
  return (
    <div className="py-5 px-4 md:px-20">
      <div className="flex gap-4 flex-col">
       
        <div className="mb-8 p-6 bg-blue-50 dark:bg-slate-700 rounded-3xl shadow-sm">
          <h3 className="text-xl md:text-xl font-semibold mb-4 text-blue-400">
            Байгууллагын ERP Систем
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="flex items-start">
              <span className="mr-2 text-blue-500">✓</span>
              <span>Хүний нөөц</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-blue-500">✓</span>
              <span>Санхүү бүртгэл</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-blue-500">✓</span>
              <span>Төслийн менежмент</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-blue-500">✓</span>
              <span>Гэрээ</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-blue-500">✓</span>
              <span>Тушаал болон архив бичиг баримт</span>
            </div>

            <div className="flex items-start">
              <span className="mr-2 text-blue-500">✓</span>
              <span>Дуудлагын бүртгэл</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-blue-500">✓</span>
              <span>Борлуулалт</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-blue-500">✓</span>
              <span>Худалдан авалт</span>
            </div>
          </div>
        </div>
        <div className="mb-8 p-6 bg-blue-50 dark:bg-slate-700 rounded-3xl shadow-sm">
          <h3 className="text-xl md:text-xl font-semibold mb-4 text-blue-400">
            Коха Номын сангийн систем
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            <div className="flex items-start">
              <span className="mr-2 text-blue-500">✓</span>
              <span>UI/UX дизайн</span>
            </div>
             <div className='flex items-start'>
              <span className='mr-2 text-blue-500'>✓</span>
              <span>Коха системийн хувилбар ахиулалт </span>
            </div>
            <div className='flex items-start'>
              <span className='mr-2 text-blue-500'>✓</span>
              <span>Коха системийн хөгжүүлэлт </span>
            </div>
          </div>
        </div>
        <div className="mb-8 p-6 bg-blue-50 dark:bg-slate-700 rounded-3xl shadow-sm">
          <h3 className="text-xl md:text-xl font-semibold mb-4 text-blue-400">
            Веб болон Гар утасны аппликешн
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            <div className="flex items-start">
              <span className="mr-2 text-blue-500">✓</span>
              <span>Хувь хүний брэнд вэб систем</span>
            </div>
             <div className='flex items-start'>
              <span className='mr-2 text-blue-500'>✓</span>
              <span>Компаний брэнд вэб систем </span>
            </div>
             <div className='flex items-start'>
              <span className='mr-2 text-blue-500'>✓</span>
              <span>Мобайл аппликешн</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
