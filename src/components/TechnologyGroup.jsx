function TechnologyGroup({ group }) {
  return (
    <article className="technology-group">
      <div className="technology-group-heading">
        <span aria-hidden="true">
          <i className={`bi ${group.icon}`} />
        </span>
        <h3>{group.title}</h3>
      </div>
      <ul className="technology-list">
        {group.items.map((item) => (
          <li key={item.name} className={item.featured ? "is-featured" : ""}>
            <span>{item.name}</span>
            {item.note && <small>{item.note}</small>}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default TechnologyGroup;
