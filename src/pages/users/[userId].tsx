import { useRouter } from "next/router";

const UserProfile = () => {
  const router = useRouter();
  const userId = router.query.userId;
  
  return <div>User: {userId}</div>
}

export default UserProfile;