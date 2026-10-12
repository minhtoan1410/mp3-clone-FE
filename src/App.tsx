import { MainLayOut } from "./layout/MainLayout";

export function App() {
  const obj = {
    link: "https://a128-z3.zmdcdn.me/67af38576c9b7a05d201598bbdc90fbc?authen=exp=1791042922~acl=/67af38576c9b7a05d201598bbdc90fbc*~hmac=fb72c53fd132b52002684154246434ed",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/d/a/0/cda072526e88b03c5fb8066b5cfb0dee.jpg",
    title: "Gói Con Tim Làm Quà (From 'Bò Sữa Bay')",
    artistsNames: "Nguyễn Hùng, Mounter",
  };
  return (
    // <BrowserRouter>
    // </BrowserRouter>
    <MainLayOut></MainLayOut>
    // <SongPlayer {...obj} />
  );
}

export default App;
