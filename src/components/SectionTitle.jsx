function SectionTitle({ id, eyebrow, title, description }) {
  return (
    <header className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}

export default SectionTitle;
