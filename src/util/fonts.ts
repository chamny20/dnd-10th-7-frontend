import localFont from "next/font/local";

// export const MediumPretendard = localFont({
//   src: [
//     {
//       path: "../../public/fonts/Pretendard-Medium.woff",
//       weight: "400",
//     },
//   ],
//   variable: "--font-medium-pretendard",
// });

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard-SemiBold.woff",
      weight: "700",
    },
    {
      path: "../../public/fonts/Pretendard-Medium.woff",
      weight: "500",
    },
    // TODO : 추가 가능
  ],
  variable: "--font-pretendard",
});

export default pretendard;
