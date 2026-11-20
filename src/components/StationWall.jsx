import { LineBullet } from './SubwayNav';

const TILE_COUNT = 48;

// Deterministic "hand-laid" shading so the wall looks tiled rather than flat.
function tileShade(i, row) {
  if ((i * (row ? 7 : 3)) % 11 === 0) return 'tile light';
  if ((i * 5 + row) % 13 === 0) return 'tile dark';
  return 'tile';
}

function TileRow({ row }) {
  return (
    <div className="tiles" aria-hidden="true">
      {Array.from({ length: TILE_COUNT }, (_, i) => (
        <span key={i} className={tileShade(i, row)} />
      ))}
    </div>
  );
}

export default function StationWall({ name, subtitle, lineNumber }) {
  return (
    <div className="station-wall">
      <TileRow row={0} />
      <div className="station-sign">
        <div>
          <h1 className="station-name">{name}</h1>
          {subtitle && <p className="station-sub">{subtitle}</p>}
        </div>
        <LineBullet number={lineNumber} size="lg" />
      </div>
      <TileRow row={1} />
    </div>
  );
}
