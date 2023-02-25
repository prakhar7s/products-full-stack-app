export const ItemRating = ({ rating }) => {
  return (
    <div className="mb-2">
      {Array.from(Array(rating).keys())?.map((item) => (
        <i
          class="bi bi-star-fill fs-20 fc-rating me-1"
          key={`RATING-${item}`}
        ></i>
      ))}
    </div>
  );
};
