function Kiniem({
  memories,
  current,
  nextMemory,
  previousMemory,
  goHome
}) {
  return (
    <div className="memories">

      <button
        className="back-button"
        onClick={goHome}
      >
        ← Quay lại
      </button>

      <h1>
        Câu chuyện của chúng ta
      </h1>

      <div className="heart-small">
        ❤️
      </div>

      <div className="memory-card">

        <img
          src={memories[current].image}
          alt={memories[current].title}
        />

        <div className="memory-content">

          <h2>
            {memories[current].title}
          </h2>

          <p>
            {memories[current].note}
          </p>

        </div>

      </div>

      <div className="counter">
        {current + 1} / {memories.length}
      </div>

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