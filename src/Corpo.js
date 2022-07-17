import Storys from "./Storys";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

function Corpo()
{
    return(
        <div class="corpo">
                <div class="esquerda">
                    <Storys />
                    <Posts />

                
                </div>
                <Sidebar />
                
        </div>
    );
}

export default Corpo;