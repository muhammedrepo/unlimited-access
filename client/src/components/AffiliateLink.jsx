import { useAppContext } from '../context/appContext';

const AffiliateLink = ({ url }) => {
  const { clickCount } = useAppContext();

  const handleClick = async () => {
    clickCount();
  };

  return (
    <div>
      <a href={url} onClick={handleClick}>
        {url}
      </a>
      <p>Clicks: {clickCount}</p>
    </div>
  );
};

export default AffiliateLink;
