import Button from "@/UI/redbutton/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section_top ">
      <div className="container">
        <div>
          <h1 className="title rocket text-blue text-center mt-2">Page not found</h1>
          <p className="paragraph text-gray text-center mt-2">
            The page you are looking for does not exist
          </p>
          <div className="text-center mt-2">
            <Link href="/" style={{ textDecoration: "none" }}>
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
