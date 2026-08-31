function TechnologyGroup({ group }) {
  return (
    <article className="technology-group">
      <h3>{group.title}</h3>
      <ul className="technology-list">
        {group.items.map((item) => (
          <li key={item.name} className={item.featured ? "is-featured" : ""}>
            {item.name}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default TechnologyGroup;
