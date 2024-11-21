import Image from "next/image";
import girlWithTrophy from "@/assets/girl-with-tropy.png";
const Player = () => {
  return (
    <section className="section_top">
      <div className="container">
        <h2 className="title rocket text-blue text-center">
          Youngest Player to represent National T20 Women's Championship
        </h2>
        <div className="inner-margin">
          <div className="grid_1_to_2 gap5">
            <div>
              <Image
                src={girlWithTrophy}
                alt="girl with trophy"
                className="img-fluid block margin-auto"
              />
            </div>
            <div>
              <p className="paragraph text-gray full-text-justify lg-margin-bottom2">
                Markham Cricket Academy would like to congratulate Ms. Rhea
                Misra for her impeccable achievements. Her growth In Markham
                Cricket Academy in Canada has been astonishing and very
                inspiring for many aspiring cricketers. To begin with, she is
                the youngest player from all of Canada to be playing in the
                National T 20 Women's Championship at 15 years of age. Next, Ms.
                Rhea Misra has finished third in the National T20 Women's
                Championship Rankings. She hit a tremendous score of 269 runs,
                which includes three half centuries. She had also won three
                Player of the Match awards at the National T20 Women
                Championship. Markham Cricket Academy would like to see Ms. Rhea
                Misra excel in her future goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Player;
