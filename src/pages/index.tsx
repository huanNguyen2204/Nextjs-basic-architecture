import { Button } from "@/components/button/button";
import { InputField } from "@/components/form/input-fields";
import { Link } from "@/components/link/link";
import { Seo } from "@/components/seo/seo";

const LandingPage = () => {
  return (
    <>
      <Button variant="solid" type="button">
        Click Me
      </Button>
      <br />
      <InputField label="Name" />
      <br />
      <Link href="/">Home</Link>

      <Seo title="Jobs App" />
    </>
  );
};

export default LandingPage;
