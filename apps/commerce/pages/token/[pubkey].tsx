import { useRouter } from "next/router";
import useSWR from "swr";

export const TokenView = () => {
  const router = useRouter();
  const { pubkey } = router.query;

  const { data } = useSWR(`/api/token/${pubkey}`, (url) =>
    fetch(url).then((r) => r.json())
  );

  console.log(data);

  return <p>{pubkey}</p>;
};

export default TokenView;
