import React from 'react';

const AboutUs = () => {
  return (
    <div className='py-5 px-4 md:px-20'>
      <div className='flex gap-4 flex-col'>
        <div className='p-8 overflow-hidden rounded-3xl shadow-sm border bg-blue-50 dark:bg-slate-700'>
          <div className='text-center mx-auto'>
            <h2 className='text-xl md:text-3xl font-bold -mt-4 mb-2 text-blue-400'>Бидний тухай</h2>
            <p className='mb-4 text-md md:text-xl font-medium text-justify'>
              &nbsp;&nbsp;&nbsp;&nbsp;Манай Лүпер Софт ХХК нь 2022 онд Програм Хангамжийн чиглэлээр үйл ажиллагаа явуулж, өндөр чанартай бүтээгдэхүүн үйлчилгээг хэрэглэгчид нийлүүлэх зорилгоор байгуулагдсан инновацилаг бүтээлч байгуулга юм.
              Байгуулагдсан цагаасаа эхлэн вэб систем хөгжүүлэлт, ухаалаг аппликэшн хөгжүүлэлт, дизайн хөгжүүлэлт болон мэдээлэл технологийн сургалт, зөвлөгөө гэсэн үндсэн чиглэлүүдээр дотоодын олон байгууллагатай хамтарч ажилласан арвин туршлагатай.
              Компанийн хүний нөөц нь гадаад болон дотоодын их дээд сургууль төгссөн, мэргэжлээрээ нэг баг болж 2022 оноос хойш хамтарч ажилласан, 15 жилийн турш систем хөгжүүлэлтийн шилдэг технологуудыг ашиглан хөгжүүлэлт хийж буй мэргэшсэн боловсон хүчнээс бүрдэж байна. 
            </p>
            <span className='mb-1 text-md md:text-xl font-medium text-center'>
              Хэрэв танд програм хангамж болон техник, технологийн шийдэл хэрэгтэй бол Лүпер Софт-тэй хамтран ажиллаарай!
            </span>
          </div>
        </div>
        
        <div className='mb-8 p-6 bg-blue-50 dark:bg-slate-700 rounded-3xl shadow-sm'>
          <h3 className='text-xl md:text-2xl font-semibold mb-4 text-blue-400'>Бидний давуу талууд</h3>
          <div className='grid md:grid-cols-2 gap-4 text-left'>
            <div className='flex items-start'>
              <span className='mr-2 text-blue-500'>✓</span>
              <span>Монголын орчинд тохирсон олон улсын шийдэл</span>
            </div>
            <div className='flex items-start'>
              <span className='mr-2 text-blue-500'>✓</span>
              <span>Шинэлэг технологи (AI, Cloud, аналитик)</span>
            </div>
            <div className='flex items-start'>
              <span className='mr-2 text-blue-500'>✓</span>
              <span>Найдвартай, алдаагүй системийн дизайн</span>
            </div>
            <div className='flex items-start'>
              <span className='mr-2 text-blue-500'>✓</span>
              <span>Клиент төвтэй хандлага, нягт хамтын ажиллагаа</span>
            </div>
          </div>
        </div>
        
        <div className='mb-8 p-6 bg-blue-50 dark:bg-slate-700 rounded-3xl shadow-sm'>
          <h3 className='text-xl md:text-2xl font-semibold mb-4 text-blue-400'>Хэрэгжүүлсэн төслүүд</h3>
          <div className='grid md:grid-cols-2 gap-4 text-left'>
            <div className='flex items-start'>
              <span className='mr-2 text-blue-500'>2022</span>
              <div className='flex flex-col gap-1'>
                <div>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span className='font-medium'>&quot;Номин Холдинг&quot; ХХК-д &quot;Odoo ERP&quot; системийн хувилбар ахиулалт</span>
                </div>
              </div>                                
            </div>
            <div className='flex items-start'>
              <span className='mr-2 text-blue-500'>2023</span>                
              <div className='flex flex-col gap-1'>
                <div>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span className='font-medium'>&quot;Номин Холдинг&quot; ХХК-д өгөгдлийн баазын засвар сайжруулалт</span>
                </div>
                <div>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span className='font-medium'>&quot;ИСМ Биллинг Центр&quot; ХХК-д &quot;EDIMIS 3.0&quot; Фронтэнд вэб апп</span>
                </div>
              </div>
            </div>
            <div className='flex items-start'>
              <span className='mr-2 text-blue-500'>2024</span>                
              <div className='flex flex-col gap-1'>
                <div>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span className='font-medium'>&quot;МУИС-ийн номын сангийн &quot;Коха&quot; системийн UI/UX дизайн шинэчлэл, дизайны дагуух өөрчлөлт</span>
                </div>
                <div>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span className='font-medium'>&quot;ИСМ Биллинг Центр&quot; ХХК-д ECM-EBARIMT апп</span>
                </div>
                <div>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span className='font-medium'>&quot;ИСМ Биллинг Центр&quot; ХХК-д ECM-LICENSE-MANAGER апп</span>
                </div>
                <div>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span className='font-medium'>&quot;ИСМ Биллинг Центр&quot; ХХК-д MDM-FRONTEND, MDM-BACKEND апп</span>
                </div>
              </div>
            </div>
            <div className='flex items-start'>
              <span className='mr-2 text-blue-500'>2025</span>                
              <div className='flex flex-col gap-1'>
                <div>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span className='font-medium'>&quot;Парламентын судалгаа, хөгжлийн хүрээлэн&quot;-д Номын сангийн &quot;Коха&quot; системийн сайжруулалт</span>
                </div>
              </div>
            </div>
          </div>            
        </div>
      </div>
    </div>
  );
};

export default AboutUs;