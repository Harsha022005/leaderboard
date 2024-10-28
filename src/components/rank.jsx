const RankCard = ({ name, xp, avatar }) => {
  return (
      <div className="main">
          <div className="leaderboard">
              <ul>
                  <li>
                      <div className="rank">1</div>
                      <div className="user-info">
                          <span>
                              <img src={avatar} alt="User Avatar" />
                          </span>
                          <div className="details">
                              <span className="username">{name}</span>
                              <span className="score">{xp} XP</span>
                          </div>
                      </div>
                  </li>
                  {/* Add more list items for other users */}
              </ul>
          </div>
      </div>
  );
}

export default RankCard;
