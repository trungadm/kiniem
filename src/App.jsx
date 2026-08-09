import { useState, useEffect } from "react";
import Kiniem from "./kiniem";
import "./App.css";


const memories = [
  {
    image: "/images/1.jpg",
    title: "Ngày đầu tiên",
    note: "Ngày mà chúng ta bắt đầu có những kỷ niệm cùng nhau, ấy con gái đi chơi với bạn trai ngày đầu tiên mà không chỉnh trang lại gì hết ảo thật đấy, đã thế còn nắm nát ngón tay người ta, ta nói vừa đau vừa thích, cảm giác thật hồi hộp khó tả😳."
  },
  {
    image: "/images/2.jpg",
    title: "Một ngày bình thường",
    note: "Có những ngày chẳng có gì đặc biệt, nhưng vì có nhau nên lại trở nên đáng nhớ: Trang rủ Trung đi học này mê Trung quá chứ gì nhìn bảnh vậy mà, nhưng mà cũng vui với lại hồi hộp lần đầu được đi học cùng người mình eo, giả bộ không quan tâm người ta nữa chứ haizzz cù cittt💞"
  },
  {
    image: "/images/3.jpg",
    title: "Khoảnh khắc đáng nhớ",
    note: "Có lẽ sau này nhìn lại, chúng ta vẫn sẽ mỉm cười vì khoảnh khắc này: ai mà xinh thế trờiii ơi mê quá điii👊."
  },
  {
    image: "/images/4.jpg",
    title: "Cùng nhau",
    note: "Cảm ơn vì đã cùng nhau tạo nên những kỷ niệm đẹp như thế này."
  },
  {
    image: "/images/5.jpg",
    title: "Cùng nhau",
    note: " vẫn là đi xem phim thôi nhưng không còn ngại nhữaaaa, lúc này anh đã yêu em lắm ròi, mê như điếu đổ👉👈."
  },
  {
    video: "/videos/1.mp4",
    title: "Dạo chơi",
    note: " dù có đi đâu chỉ cần nghĩ về nhau ."
  },
  {
  image: "/images/2.jpg",
  title: "",
  note: "Có những ngày chẳng có gì đặc biệt, nhưng vì có nhau nên lại trở nên đáng nhớ..."
},
{
  image: "/images/2.jpg",
  title: "Một ngày bình thường",
  note: "Có những ngày chẳng có gì đặc biệt, nhưng vì có nhau nên lại trở nên đáng nhớ..."
},
{
  image: "/images/2.jpg",
  title: "Một ngày bình thường",
  note: "Có những ngày chẳng có gì đặc biệt, nhưng vì có nhau nên lại trở nên đáng nhớ..."
},
{
  image: "/images/2.jpg",
  title: "Một ngày bình thường",
  note: "Có những ngày chẳng có gì đặc biệt, nhưng vì có nhau nên lại trở nên đáng nhớ..."
},
];

function App() {
  const [page, setPage] = useState("welcome");
  const [current, setCurrent] = useState(0);

  const goHome = () => {
    setCurrent(0);
    setPage("welcome");
  };

  const nextMemory = () => {
    if (current < memories.length - 1) {
      setCurrent(current + 1);
    } else {
      setPage("final");
    }
  };

  const previousMemory = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="app">

      {/* TRANG ĐẦU */}

      {page === "welcome" && (
        <div className="welcome">

          <div className="welcome-content">

            <div className="heart">
              ❤️
            </div>

            <h1>
              Gửi em người mà anh luôn yêu thương...
            </h1>

            <p>
              Đây là một món quà nhỏ anh dành tặng em, cũng có thể đây là lần cuối cùng anh tặng em.
            </p>

            <p>
              Em có muốn mở nó không?
            </p>

            <div className="buttons">

              <button
                className="continue"
                onClick={() => setPage("memories")}
              >
                💗 Em có^^
              </button>

              <button
                className="stop"
                onClick={() => setPage("stop")}
              >
                🚪 Em không -.-
              </button>

            </div>

          </div>

        </div>
      )}

      {/* TRANG DỪNG */}

      {page === "stop" && (
        <div className="stop-page">

          <div className="heart">
            
          </div>

          <h3>
            ô citt ai cho bấm vào đây 
          </h3>

          <p>
            Anh đã chuẩn bị rất lâu đấy...
          </p>

          <div className="buttons">

            <button
              className="continue"
              onClick={() => setPage("memories")}
            >
              Thôi được, cho em xem đi🥺
            </button>

            <button
              className="stop"
              onClick={goHome}
            >
              ← Quay lại
            </button>

          </div>

        </div>
      )}

      {/* TRANG KỶ NIỆM */}

      {page === "memories" && (
        <Kiniem
          memories={memories}
          current={current}
          nextMemory={nextMemory}
          previousMemory={previousMemory}
          goHome={goHome}
        />
      )}

      {/* TRANG CUỐI */}

      {page === "final" && (
        <div className="final">

          <div className="heart">
            ❤️
          </div>

          <h1>
            Cảm ơn vì đã xuất hiện
          </h1>

          <p>
            Những khoảnh khắc này sẽ trở thành
            những kỷ niệm thật đẹp.
          </p>

          <p>
            Hy vọng chúng ta sẽ còn tạo ra
            thật nhiều kỷ niệm khác trong tương lai.
          </p>

          <h2>
            Câu chuyện vẫn còn tiếp tục...
          </h2>

          <div className="buttons">

            <button
              className="continue"
              onClick={() => {
                setCurrent(0);
                setPage("memories");
              }}
            >
              💕 Xem lại kỷ niệm
            </button>

            <button
              className="stop"
              onClick={goHome}
            >
              ← Về trang đầu
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;