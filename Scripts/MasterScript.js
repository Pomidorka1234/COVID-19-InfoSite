class TopDiv extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div id='top-panel'>
                <div id='top-left'>
                    <logoheader id='logo-header' className='top'>
                        <h1 id='logo'>Deboonka</h1>
                        <h6>Fact checking the official narrative</h6>
                    </logoheader>
                    <div id='info' className='top'>
                        <i id='main-info-circle' className="fas fa-info-circle"></i>
                        <div id='info-title' style={{visibility: 'hidden'}}>
                            <p id='info-title-p'>
                                Our web site focuses on providing the correct and precise data & facts on
                                any topic circulating on the news or in the past few days and weeks
                            </p>
                            <i id='main-info-circle-i' className="fas fa-times"></i>
                        </div>
                    </div>
                </div>
                <div id='top-right'>
                    <div id='top-top'>
                        <div id='Directories' className='top'>
                            <div id='Contribution' className='dir'>Contribution</div>
                            <div id='Discussion' className='dir'>Discussion</div>
                        </div>
                    </div>
                    <div id='top-bottom'>
                        <div id='search-bar'>
                            <input id='bar' type="search" placeholder="Search" />
                            <i id="search-bar-click" className="fas fa-search"></i>
                        </div>
                        <div id='info-2'>
                            <i className="fas fa-info-circle"></i>
                            <div id='info-details'>
                                <p id='info-description'>Help us inform the public</p> <hr />
                                <div id='info-profile'>
                                    <a>Login</a>
                                    <a href="Registration_templ.html">Register</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<TopDiv />, document.getElementById("master-container"));


$(document).ready(function () {
    $("#main-info-circle").on('click', function () {
        $("#info-title").css("visibility") == "hidden" ?
        $("#info-title").css("visibility", "visible") :
        $("#info-title").css("visibility", "hidden");
    });
    $("#main-info-circle-i").on("click", function() {
        $("#info-title").css("visibility", "hidden");
    });
});


setInterval(function() {
    let zoomSize = Math.round((window.outerWidth / window.innerWidth) * 100);
    if (zoomSize >= 175) {
        $("#info-2").css("display", "none");
    }
    else {
        $("#info-2").css("display", "flex");
    }

    if (zoomSize > 200) {
        $(".section").css("width", "700px");
        $(".options").css("display", "none");
    }
    else {
        $(".section").css("width", "850px");
        $(".options").css("display", "flex");
    }
}, 0);