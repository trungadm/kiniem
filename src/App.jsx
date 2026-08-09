import { useState, useRef, useEffect } from "react";
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
    note: "Vẫn là đi xem phim thôi nhưng không còn ngại nhữaaaa, lúc này anh đã yêu em lắm ròi, mê như điếu đổ👉👈."
  },
  {
    video: "/videos/1.mp4",
    title: "Dạo chơi",
    note: "Dù có đi đâu chỉ cần nghĩ về nhau."
  },
  {
    video: "/videos/2.mp4",
    title: "Bày tỏ",
    note: "màn bày tỏ tình cảm của chàng trai dành cho người anh yêu, thật là ngọt ngào và đáng yêu quá đi mất thôi, Trang ơi Trang có biết là anh mê em lắm không, mê cực luôn đó nhaaa💞, lúc đó đúng xàm luôn anh bị mất trí không biết nói gì nó lãng mạn hơn nữa luôn ấy."
  },
  {
    image: "/images/6.jpg",
    title: "Nắm tay nhau",
    note: "tình yêu của anh ngày lớn dần hơn, anh bắt đầu nhận ra rằng em là người đặc biệt trong cuộc đời anh^^."
  },
  {
    image: "/images/7.jpg",
    title: "Dạo chơi",
    note: "đi ăn cùng em này,em nhớ không hôm đó em xinh lắm í anh là mê em lắm luôn đó nhaaa, anh thích nhìn em cười lắm, khi em cười cảm giác thật khó tả,không phải riêng hôm đó đâu mà ngày nào Trang chả xinh heng^^."
  },
  {
    image: "/images/8.jpg",
    title: "Những món quà",
    note: "em tặng quà cho anh, anh vui ghe, lần đầu được người yêu tặng quà, anh nói thật ấy, anh thích lắm, nhưng mà anh thấy em là món quà lớn nhất mà anh nhận được vì em là người anh yêu là ngoại lệ của anh"
  },
  {
    video: "/videos/3.mp4",
    title: "Trang vlog",
    note:"helooo mình là Trang vi lóccc đây nay mình được bồ nhí đưa đi ăn nạp hưởng đây, haizz anh chiều em quá rồi em hư qué ăn ba món tào lao, biết thế anh kiên quyết không cho em ăn nữa, nhưng mà người mình yêu mà không đành đâu ạ^^, chấn chỉnh lại sau, mà cơ hội ấy không có nữa rồi"
  },
  {
    image: "/images/9.jpg",
    title: "đi làm",
    note: "đó em biết lúc này anh đã thích em chưa, và câu trả lời của anh là anh đã thích từ lần đầu anh gặp em, và anh muốn gặp lại em, bùm bất ngờ chưa em đã đi làm, lúc đó anh chưa biết gì về em cả nhưng anh tiếp cận em hỏi chuyện em, haha em biết gì không thế nào lại là em nhắn anh trước mới hài chứ lại còn gửi dùm ảnh ôi trời ơi mà uổng anh mất tin nhắn, khi biết em có người thích thì hỏi có buồn không thì đương nhiên là có rồi, có lẽ em quên nhưng anh vẫn còn nhớ như in lời anh nói rằng anh sẽ cố gắng hết sức với người mình yêu nếu như không được thích lại thì đành chịu thôi"
  },
   {
    image: "/images/10.jpg",
    title: "đi chill",
    note: "ảnh chiều chỉ quá riết em chỉ muốn đi chơi thôi, phải không đó hay là muốn gặp anh muốn ở cạnh anh, chắc là thế rồi chứ ai mà đi chơi miết vậy còn không muốn về phải hemm^^"
  },
   {
    image: "/images/11.jpg",
    title: "Photo bút nhà làm",
    note: "nhìn vậy mà cũng thơ quá em nhỉ nhìn em thật tươi, thật xinh, từ khi nào cô em là người yêu của anh vậy, anh thật là may mắn, em nói anh đen á, không phải đâu sự may mắn đó tất cả là để được gặp em, sau đó mọi điều anh làm, anh cố gắng làm cho em thì đâu cần may mắn nữa, điều anh cần là có em ở bên,điều em cần là một chàng trai đủ mạnh mẽ để em dựa vào không phải hay sao"
  },
   {
    image: "/images/12.jpg",
    title: "Photo bút nhà làm",
    note: ""
   },
   {
    video: "/videos/4.mp4",
    title: "giận dỗi",
    note:"trông em dỗi kìa vừa đáng yêu vừa đáng ghét, là do em không muốn xa anh hay em bực mình vì anh đã không quan tâm hay hay điều gì đó ạ, lúc đó anh không biết nữa em ạ anh chỉ biết làm sao cho em vui thôi anh biết là anh chưa hoàn hảo, chưa làm điều gì đó cho em tốt hơn lúc chưa có anh, nhưng anh vẫn cố gắng em ơi, trêu ghẹo em chút cho em vui ha"
  },
   {
    image: "/images/13.jpg",
    title: "gần gũi",
    note: "tình yêu của anh dành cho em lại nhiều hơn nữa rồi Trang ơi, mình gần nhau hơn bao giờ hết, anh không muốn đánh mất em đâu, anh muốn được ở bên em,trông em kìa xinh chưa"
   },
    {
    image: "/images/14.jpg",
    title: "Vibe",
    note: "đồ của em và anh mua xem khác nhau ra sau nhé,anh muốn thay đổi cho em một chút về cách ăn mặc, ý không phải chê đâu, đồ em mua chưa hợp với bông hoa đẹp nhất là em đâu,phải là anh khai phá cơ, yêu đúng người chưa^^"
    },
     {
    image: "/images/15.jpg",
    title: "Vibe",
    note: ""
     },
      {
    image: "/images/16.jpg",
    title: "chờ đợi",
    note: "cái đồ lâu la em hay chê anh lâu la, có lâu nhá có em thì có em lâu lâu lâu, nhưng chả sao cả anh vẫn đợi được mà phải hem, chờ em bao lâu chả được miễn là em còn ở bên anh thì cả đời anh cũng chờ"
      },
       {
    image: "/images/17.jpg",
    title: "lời nhắn",
    note: "còn nhiều điều anh muốn nói với em lắm nhưng anh không biết nói sao cho hay, anh chỉ muốn nói rằng anh yêu em nhiều lắm, yêu em nhiều hơn cả những gì anh có thể diễn tả bằng lời, anh muốn được ở bên em, được chăm sóc em, được bảo vệ em, được làm tất cả những điều mà một người con trai yêu thương người con gái của mình sẽ làm"
       },
        {
    image: "/images/19.jpg",
    title: "Sea",
    note: "em muốn đi chơi đúng không, anh biết mà, anh cũng muốn đi chơi với em lắm, nhưng mà anh lúc đó anh chưa đủ khả năng anh xin lỗi em, rồi anh vẫn cố để cho em đi chơi, có lẽ đó là chuyến đi đầu tiên cũng như cuối cùng phải không em, anh không muốn như thế, mà anh vẫn muốn được ở bên em, được nhìn thấy em cười, được nghe thấy tiếng em nói, được cảm nhận được tình yêu của em dành cho anh"
        },
         {
    image: "/images/18.jpg",
    title: "kết thúc",
    note: "anh không làm được nữa em ơi, có lẽ anh chỉ làm được tới đây thôi còn nhiều lắm nhưng mà khi anh viết anh nhìn những tấm hình, kỉ niệm vui bên em anh không cầm được nước mắt của mình,em ơi là do anh yếu đuối hay do anh quá yêu em vậy ạ,buổi chiều hôm ấy em nói với anh mình không bên cạnh bên nhau nữa, anh như vỡ oà, anh hận em anh hận em tận xương tuỷ,em mang đến cho anh tình yêu mà anh chưa từng có, em nói yêu anh nhưng anh rời bỏ anh đi, em nói em có tình cảm với người khác anh càng hận em, tình cảm của em dễ dàng vậy sao, anh hận em lắm, anh muốn chôn vùi hết tất cả về em, anh ghét em,anh không làm được điều ấy em ơi sao anh phải chịu đau như vậy, anh cũng là một người bình thường thôi mà, thật may người đau khổ là anh, nếu như anh rời bỏ em như vậy anh đau lòng lắm,khi chúng ta khó khắn nhất chúng ta có nhau, khó khăn còn đấy nhưng em không còn đây, em đã rời bỏ anh,anh nói sẽ đợi em, nhưng mỗi đêm anh đều khóc nức nở như một đứa trẻ càng nhìn bim anh càng như vỡ oà anh không chịu nổi nữa em ơi, anh muốn em về bên anh, anh muốn em là tương lai của anh, anh không muốn mình là quá khứ của nhau càng không muốn em ở bên ai khác, anh không muốn em lại lặp lại sai lầm khi chọn một người bên cạnh nữa, anh không muốn"
         },
         {
          title: "anh yêu em"
         }
        

];

function App() {
  const [page, setPage] = useState("welcome");
  const [current, setCurrent] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const musicRef = useRef(null);

  // =========================
  // TẠO NHẠC
  // =========================

  const createMusic = () => {
    if (!musicRef.current) {
      musicRef.current = new Audio("/music/love.mp3");

      musicRef.current.loop = true;
      musicRef.current.volume = 0.5;
    }

    return musicRef.current;
  };

  // =========================
  // CHẠY NHẠC
  // Không reset thời gian
  // =========================

  const startMusic = () => {
    const music = createMusic();

    music.play().catch(() => {});
  };

  // =========================
  // PAUSE NHẠC
  // Giữ nguyên thời gian hiện tại
  // =========================

  const pauseMusic = () => {
    if (musicRef.current) {
      musicRef.current.pause();
    }
  };

  // =========================
  // DỪNG HOÀN TOÀN
  // Reset về đầu
  // =========================

  const stopMusic = () => {
    if (musicRef.current) {
      musicRef.current.pause();
      musicRef.current.currentTime = 0;
    }
  };

  // =========================
  // QUAY VỀ TRANG ĐẦU
  // =========================

  const goHome = () => {
    stopMusic();

    setVideoPlaying(false);
    setCurrent(0);
    setPage("welcome");
  };

  // =========================
  // KỶ NIỆM TIẾP THEO
  // =========================

  const nextMemory = () => {
    setVideoPlaying(false);

    if (current < memories.length - 1) {
      setCurrent(current + 1);
    } else {
      stopMusic();
      setPage("final");
    }
  };

  // =========================
  // KỶ NIỆM TRƯỚC
  // =========================

  const previousMemory = () => {
    setVideoPlaying(false);

    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  // =========================
  // XỬ LÝ KHI ĐANG XEM VIDEO
  // =========================

  useEffect(() => {
    if (page !== "memories") {
      return;
    }

    const memory = memories[current];

    if (memory.video && videoPlaying) {
      pauseMusic();
    }
  }, [current, page, videoPlaying]);

  // =========================
  // TRANG
  // =========================

  return (
    <div className="app">

      {/* =========================
          TRANG ĐẦU
      ========================= */}

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
              Đây là một món quà nhỏ anh dành tặng em,
              cũng có thể đây là lần cuối cùng anh tặng em.
            </p>

            <p>
              Em có muốn mở nó không?
            </p>

            <div className="buttons">

              <button
                className="continue"
                onClick={() => {
                  setCurrent(0);
                  setVideoPlaying(false);

                  const music = createMusic();

                  music.currentTime = 0;
                  music.play().catch(() => {});

                  setPage("memories");
                }}
              >
                💗 Em có^^
              </button>

              <button
                className="stop"
                onClick={() => {
                  stopMusic();
                  setPage("stop");
                }}
              >
                🚪 Em không -.-
              </button>

            </div>

          </div>

        </div>
      )}

      {/* =========================
          TRANG DỪNG
      ========================= */}

      {page === "stop" && (
        <div className="stop-page">

          <div className="heart">
            💔
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
              onClick={() => {
                setCurrent(0);
                setVideoPlaying(false);

                const music = createMusic();

                music.currentTime = 0;
                music.play().catch(() => {});

                setPage("memories");
              }}
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

      {/* =========================
          TRANG KỶ NIỆM
      ========================= */}

      {page === "memories" && (
        <Kiniem
          memories={memories}
          current={current}
          nextMemory={nextMemory}
          previousMemory={previousMemory}
          goHome={goHome}
          setVideoPlaying={setVideoPlaying}
          startMusic={startMusic}
        />
      )}

      {/* =========================
          TRANG CUỐI
      ========================= */}

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
                setVideoPlaying(false);

                const music = createMusic();

                music.currentTime = 0;
                music.play().catch(() => {});

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