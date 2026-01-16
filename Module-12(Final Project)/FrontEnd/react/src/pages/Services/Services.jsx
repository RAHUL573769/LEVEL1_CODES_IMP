// import Slider from "react-slick";

// import google from "../../assets/clients/google.png";
// import meta from "../../assets/clients/meta.png";
// import amazon from "../../assets/clients/amazon.png";
// import netflix from "../../assets/clients/netflix.png";
// import microsoft from "../../assets/clients/microsoft.png";
// import adobe from "../../assets/clients/adobe.png";
// import tesla from "../../assets/clients/tesla.png";

// const clients = [
//   { id: 1, logo: google },
//   { id: 2, logo: meta },
//   { id: 3, logo: amazon },
//   { id: 4, logo: netflix },
//   { id: 5, logo: microsoft },
//   { id: 6, logo: adobe },
//   { id: 7, logo: tesla },
// ];

// const OurServices1 = () => {
//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     speed: 700,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 4 } },
//       { breakpoint: 768, settings: { slidesToShow: 3 } },
//       { breakpoint: 480, settings: { slidesToShow: 2 } },
//     ],
//   };

//   return (
//     <section className="py-16 bg-base-100">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Our Services
//         </h2>

//         <Slider {...settings}>
//           {clients.map((client) => (
//             <div key={client.id} className="px-4">
//               <div className="flex justify-center items-center h-24">
//                 <img
//                   src={client.logo}
//                   alt="Client logo"
//                   className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
//                 />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default OurServices1;
