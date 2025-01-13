import {useState} from "react"
const Section = ({ title, description ,isVisible, setisVisible}) => {
//   const [isVisible, setisVisible] = useState(false);
  return (
    <div className=" border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
      <button
        onClick={() => setisVisible(false)}
        className="cursor-pointer underline"
      >
        Hide
      </button>
      ):(
      <button
        onClick={() => setisVisible(true)}
        className="cursor-pointer underline"
      >
        Show
      </button>
      ) }

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
    const [sectionConfig, setSectionConfig ] = useState({
        showAbout: false,
        showTeam: false,
        showCareers: false,
    })
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About InstaMart"}
        description={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
        isVisible={sectionConfig.showAbout}

        setisVisible={() =>
          setSectionConfig({
            showAbout: true,
            showTeam: false,
            showCareers: false,
          })
        }
      />

      <Section
        title={"Team InstaMart"}
        description={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        isVisible={sectionConfig.showTeam}
        setisVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: true,
            showCareers: false,
          })
        }
      />
      <Section
        title={"Careers"}
        description={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        isVisible={sectionConfig.showCareers}
        setisVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showCareers: true,
          })
        }
      />
    </div>
  );
};

export default Instamart;
