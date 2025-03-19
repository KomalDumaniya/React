const Userprofile = ({user}) => {
    return (
      <div >
        <div>
          <h2>Name : - {user.name}</h2>
          <img src={user.image} alt={user.name} />
          <p>Bio : - {user.bio}</p>
        </div>
      </div>
    );
  };

export { Userprofile };



