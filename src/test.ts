import { zing } from "zingmp3-api-next";
// zing.get_song("nQdHjFu7OBG").then((data) => console.log(data));
zing.get_home().then((data) => console.log(data.data.items[0]));
// https://zingmp3.vn/bai-hat/Nang-Am-Trong-Tim-Duongg-Dadeon/.html

// {
//     song_name
//     song_name
//     cater
// }
