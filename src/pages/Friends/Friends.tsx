const Friends = () => {
  if (__IS_MOBILE__) {
    return "mobile";
  }

  const keke = (asda: string) => {
    return <div>{asda}</div>;
  };

  return (
    <div>
      Friendasdasdasdasd
      {keke("213")}
      {/* <Button>adsasdasdasd</Button> */}
    </div>
  );
};

export default Friends;
