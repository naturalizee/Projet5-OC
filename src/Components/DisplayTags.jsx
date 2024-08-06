
/* SUB FUNCTION FOR DISPLAYING TAGS */
export function DisplayTags({ tags }) {
    return (
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    );
  }