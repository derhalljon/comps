import { RiBuilding3Fill, RiHomeSmileLine, RiAttachmentLine, RiCopyrightFill } from "react-icons/ri";
import Button from "../components/Button";

function ButtonPage() {
    return (
        <div>
            <div>
                <Button primary>
                    <RiHomeSmileLine />
                    Button One
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    <RiBuilding3Fill />
                    Button Two
                </Button>
            </div>
            <div>
                <Button success rounded>
                    <RiAttachmentLine />
                    Button Three
                </Button>
            </div>
            <div>
                <Button warning outline rounded>
                    <RiCopyrightFill />
                    Button Four
                </Button>
            </div>
            <div>
                <Button danger>
                    Button Five
                </Button>
            </div>
            <div>
                <Button rounded>
                    Button Six
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    Button Seven
                </Button>
            </div>
        </div>
    );

}


export default ButtonPage;