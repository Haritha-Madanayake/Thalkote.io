// export default function EventPlan() {
//   return (
//     <section
//       id="event-plan"
//       className="bg-xtreme-black text-xtreme-white py-3 px-3 w-full mt-6 md:mt-0"
//     >
//       <h1 className="text-xtreme-orange text-2xl font-bold mb-10">
//         Event <span className="text-xtreme-white">Plan</span>
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
//         <div
//           className="w-[350px] h-[320px] bg-xtreme-silver text-white text-center flex flex-col items-center justify-center"
//           style={{
//             clipPath:
//               "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%)",
//           }}
//         >
//           <h3 className="text-lg">Sample text</h3>
//           <p className="text-sm">sample text sample text</p>
//         </div>
//         <div
//           className="w-[350px] h-[320px] text-white text-center flex flex-col items-center justify-center"
//           style={{
//             background:
//               "linear-gradient(90deg, rgba(18,18,18,0.9668242296918768) 0%, rgba(255,107,0,1) 100%)",
//             clipPath:
//               "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%)",
//           }}
//         >
//           <h3 className="text-lg">Sample text</h3>
//           <p className="text-sm">sample text sample text</p>
//         </div>
//         <div
//           className="w-[350px] h-[320px] bg-xtreme-silver text-white text-center flex flex-col items-center justify-center"
//           style={{
//             clipPath:
//               "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%)",
//           }}
//         >
//           <h3 className="text-lg">Sample text</h3>
//           <p className="text-sm">sample text sample text</p>
//         </div>
//         <div
//           className="w-[350px] h-[320px] text-white text-center flex flex-col items-center justify-center"
//           style={{
//             background:
//               "linear-gradient(90deg, rgba(18,18,18,0.9668242296918768) 0%, rgba(255,107,0,1) 100%)",
//             clipPath:
//               "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%)",
//           }}
//         >
//           <h3 className="text-lg">Sample text</h3>
//           <p className="text-sm">sample text sample text</p>
//         </div>
//         <div
//           className="w-[350px] h-[320px] bg-xtreme-silver text-white text-center flex flex-col items-center justify-center"
//           style={{
//             clipPath:
//               "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%)",
//           }}
//         >
//           <h3 className="text-lg">Sample text</h3>
//           <p className="text-sm">sample text sample text</p>
//         </div>
//       </div>

//     </section>
//   );
// }

export default function EventPlan() {
  return (
    <section id="event-plan" className="p-6 sm:p-10 mt-[600px] md:mt-0 min-h-screen">
      <h1 className="text-xtreme-white text-xtreme-medium md:text-xtreme-extra-large font-bold ml-7 sm:ml-14 mb-10">
          <span className="text-xtreme-orange">Event</span>
          {" "}<span>Plan</span>
        </h1>
      <div className="after:absolute after:inset-y-0 after:w-px after:bg-xtreme-orange/50 relative pl-6 after:left-0 grid gap-[100px]">
        <div className="grid gap-5 text-sm relative">
          <div className="aspect-square w-3 bg-xtreme-orange rounded-full absolute left-0 translate-x-[-29.5px] z-0 top-1" />
          <div className="font-medium text-xtreme-small sm:text-xtreme-medium">September 01, 2024</div>
          <div className="text-muted-foreground text-xtreme-extra-small md:text-xtreme-small">Registrations opening</div>
        </div>
        <div className="grid gap-5 text-sm relative">
          <div className="aspect-square w-3 bg-xtreme-orange rounded-full absolute left-0 translate-x-[-29.5px] z-0 top-1" />
          <div className="font-medium text-xtreme-small sm:text-xtreme-medium">September 08, 2024</div>
          <div className="text-muted-foreground text-xtreme-extra-small md:text-xtreme-small">Session 01</div>
        </div>
        <div className="grid gap-5 text-sm relative">
          <div className="aspect-square w-3 bg-xtreme-orange rounded-full absolute left-0 translate-x-[-29.5px] z-0 top-1" />
          <div className="font-medium text-xtreme-small sm:text-xtreme-medium">September 15, 2024</div>
          <div className="text-muted-foreground text-xtreme-extra-small md:text-xtreme-small">Session 02</div>
        </div>
        <div className="grid gap-5 text-sm relative">
          <div className="aspect-square w-3 bg-xtreme-orange rounded-full absolute left-0 translate-x-[-29.5px] z-0 top-1" />
          <div className="font-medium text-xtreme-small sm:text-xtreme-medium">September 22, 2024</div>
          <div className="text-muted-foreground text-xtreme-extra-small md:text-xtreme-small">Selection round (Online)</div>
        </div>
        <div className="grid gap-5 text-sm relative">
          <div className="aspect-square w-3 bg-xtreme-orange rounded-full absolute left-0 translate-x-[-29.5px] z-0 top-1" />
          <div className="font-medium text-xtreme-small sm:text-xtreme-medium">September 28, 2024</div>
          <div className="text-muted-foreground text-xtreme-extra-small md:text-xtreme-small">Finals</div>
        </div>
      </div>
    </section>
  )
}