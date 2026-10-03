import './banner.scss';

export default function Banner({ header, main, action }) {
  return (
    <section className="banner position-absolute">
      <h1>{header}</h1>
      <p>{main}</p>

      <div className="action d-flex justify-content-end">
        <a
          href={action?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="action-text d-inline-flex flex-row"
        >
          <h4>{action?.text}</h4>
          {action?.arrow ? <h4>→</h4> : null}
        </a>
      </div>
    </section>
  );
}