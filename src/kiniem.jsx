function Kiniem({
  memories,
  current,
  nextMemory,
  previousMemory,
  goHome,
  setVideoPlaying,
  startMusic
}) {
  const memory = memories[current];

  return (
    <div className="memories">

      {/* =========================
          QUAY LẠI
      ========================= */}

      <button
        className="back-button"
        onClick={goHome}
      >
        ← Quay lại
      </button>

      {/* =========================
          TIÊU ĐỀ
      ========================= */}

      <h1>
        Câu chuyện của chúng ta
      </h1>

      <div className="heart-small">
        ❤️
      </div>

      {/* =========================
          CARD
      ========================= */}

      <div className="memory-card">

        {/* ẢNH */}

        {memory.image && (
          <img
            src={memory.image}
            alt={memory.title}
          />
        )}

        {/* VIDEO */}

        {memory.video && (
          <video
            src={memory.video}
            controls
            playsInline

            onPlay={() => {
              // Video bắt đầu
              // Nhạc dừng đúng vị trí hiện tại
              setVideoPlaying(true);
            }}

            onPause={() => {
              // Video pause
              // Nhạc tiếp tục từ đúng vị trí đã dừng
              setVideoPlaying(false);
              startMusic();
            }}

            onEnded={() => {
              // Video hết
              // Nhạc tiếp tục từ đúng vị trí đã dừng
              setVideoPlaying(false);
              startMusic();
            }}
          />
        )}

        {/* NỘI DUNG */}

        <div className="memory-content">

          {memory.title && (
            <h2>
              {memory.title}
            </h2>
          )}

          <p>
            {memory.note}
          </p>

        </div>

      </div>

      {/* =========================
          SỐ KỶ NIỆM
      ========================= */}

      <div className="counter">
        {current + 1} / {memories.length}
      </div>

      {/* =========================
          NÚT CHUYỂN
      ========================= */}

      <div className="navigation">

        <button
          onClick={previousMemory}
          disabled={current === 0}
        >
          ←
        </button>

        <button
          onClick={nextMemory}
        >
          {current === memories.length - 1
            ? "Kết thúc ❤️"
            : "Tiếp theo →"}
        </button>

      </div>

    </div>
  );
}

export default Kiniem;