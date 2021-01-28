let infoList = [
    {
        sectionID: "S0",
        mediaID: "E20",
        title: "The 2020 US presidential election",
        information: "The 2020 United States presidential election was held on Tuesday, November 3, 2020. It is the 59th quadrennial presidential election. Voters select presidential electors who in turn will vote on December 14, 2020, to either elect a new president and vice president or reelect the incumbents Donald Trump and Mike Pence respectively",
        ext: "png"
    },
    {
        sectionID: "S1",
        mediaID: "Orange",
        title: "2020 US presidential elections nominee - Donald J Trump",
        information: "Donald John Trump (born June 14, 1946) is the 45th and current president of the United States. Before entering politics, he was a businessman and television personality, currently running for the republican party",
        ext: "png"
    },
    {
        sectionID: "S2",
        mediaID: "Sleepy",
        title: "2020 US presidential elections nominee - Joe R Biden",
        information: "Joseph Robinette Biden Jr. Biden is an American politician who served as the 47th vice president of the United States in the Obama administration from 2009 to 2017. A member of the Democratic Party, he served as United States Senator for Delaware from 1973 to 2009. He is the Democratic presidential nominee for the 2020 election, running against the incumbent, Donald Trump",
        ext: "png"
    },
    {
        sectionID: "S3",
        mediaID: "BLM",
        title: "Black Lives Matter movement",
        information: "Black Lives Matter (BLM) is a decentralized political and social movement advocating for non-violent civil disobedience in protest against incidents of police brutality and all racially motivated violence against black people",
        ext: "png"
    },
    {
        sectionID: "S4",
        mediaID: "IW",
        title: "InfoWars - American far-right conspiracy theory website",
        information: "InfoWars is an American far-right, and conspiracy theory website owned by Alex Jones. It was founded in 1999, and operates under Free Speech Systems LLC",
        ext: "png"
    },
    {
        sectionID: "S5",
        mediaID: "WHO",
        title: "World Health Organization - specialized agency of the UN responsible for international public health",
        information: "The World Health Organization (WHO) is a specialized agency of the United Nations responsible for international public health",
        ext: "jpg"
    },
    {
        sectionID: "S6",
        mediaID: "CDC",
        title: "Centers for Disease Control and Prevention (CDC) is a national public health institute in the US",
        information: "The Centers for Disease Control and Prevention (CDC) is a national public health institute in the United States. It is a United States federal agency, under the Department of Health and Human Services, and is headquartered in Atlanta, Georgia",
        ext: "png"
    },
    {
        sectionID: "S7",
        mediaID: "FNC",
        title: "Fox News Channel is an American multinational conservative cable news television channel",
        information: "Fox News (officially Fox News Channel, abbreviated FNC and commonly known as Fox) is an American multinational conservative cable news television channel. It is owned by Fox News Media, which itself is owned by the Fox Corporation",
        ext: "png"
    },
    {
        sectionID: "S8",
        mediaID: "CNN",
        title: "Cable News Network - An American news-based pay television channel",
        information: "Cable News Network (CNN) is an American news-based pay television channel owned by CNN Worldwide, a unit of the WarnerMedia News & Sports division of AT&T's WarnerMedia",
        ext: "png"
    },
    {
        sectionID: "S9",
        mediaID: "CBS",
        title: "CBS - An American commercial broadcast television & radio network",
        information: "The Columbia Broadcasting System (CBS) is an American commercial broadcast television and radio network owned by ViacomCBS through its CBS Entertainment Group division. The network is headquartered at the CBS Building in New York City, with major production facilities and operations in New York City (at the CBS Broadcast Center) and Los Angeles (at CBS Television City and the CBS Studio Center)",
        ext: "svg"
    },
    {
        sectionID: "S10",
        mediaID: "MSNBC",
        title: "MSNBC - An American news-based pay television cable channel",
        information: "MSNBC is an American news-based pay television cable channel, owned by the NBCUniversal News Group division of NBCUniversal (a subsidiary of Comcast). It provides NBC News coverage as well as its own reporting and political commentary on current events",
        ext: "png"
    },
]; // Make a database later on

let categoryList = [
    {
        id: "C0",
        title: "",
        background: ""
    }
];

/** 'Section' class made of a fact checking linked box */

class Section extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            visible: true
        }

        this.toggleOptions = this.toggleOptions.bind(this);
        this.toggleSection = this.toggleSection.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
        this.openSection = this.openSection.bind(this);
        this.removeSection = this.removeSection.bind(this);
    }

    toggleOptions() {
        this.state.visible ?
            $("#" + this.props.sectionID + "search-options-box").toggle() :
            this.toggleSection();

    }

    toggleSection() {
        if (this.state.visible) {
            $("#" + this.props.sectionID).css("height", "50px");
            $("#" + this.props.sectionID + "-options").css({"width": "30px", "height": "30px"});
            $("#" + this.props.sectionID + "-search-options").children().css({"font-size": "20px"});
            $("#" + this.props.sectionID + "-search-options").children().addClass("fa-search-minus");
            $("#" + this.props.sectionID + "search-options-box").toggle();
            $("#" + this.props.sectionID + "content-settings").toggle();

            $("#" + this.props.sectionID + "-information").css("height", "30px")
            .children().text(this.props.title);

            $("#" + this.props.mediaID + "-media").toggle();

        }
        else {
            $("#" + this.props.sectionID).css("height", "250px");
            $("#" + this.props.sectionID + "-options").css({"width": "100px", "height": "200px"});
            $("#" + this.props.sectionID + "-search-options").children().css({"font-size": "60px"});
            $("#" + this.props.sectionID + "-search-options").children().removeClass("fa-search-minus");
            $("#" + this.props.sectionID + "content-settings").toggle();

            $("#" + this.props.sectionID + "-information").css("height", "200px")
            .children().text(this.props.information);

            $("#" + this.props.mediaID + "-media").toggle();
        }

        this.setState({
            visible: !this.state.visible
        });
    }

    
    toggleSettings() {
        $("#" + this.props.sectionID + "content-settings-box").toggle();
    }

    openSection() {
        
    }

    removeSection(match) {
        if (findVariance(match, this.props.information))
            $("#" + this.props.sectionID).css("visibility", "hidden");
    }

    render() {
        return (
            <div id={this.props.sectionID} className='section' onClick={this.openSection}>
                <div id={this.props.sectionID + "-options"} className='options'>
                    <div id={this.props.sectionID + "-search-options"} className='search-options'>
                        <i className="fas fa-search" title="search" onClick={this.toggleOptions}></i>
                    </div>

                    <div id={this.props.sectionID + "search-options-box"} className='search-options-box' hidden>
                        <p className='options-hide' onClick={this.toggleSection}>hide</p>
                    </div>

                    <div id={this.props.sectionID + "content-settings"} className='content-settings'>
                        <i className="fas fa-cog" title="settings" onClick={this.toggleSettings}></i>
                    </div>

                    <div id={this.props.sectionID + "content-settings-box"} className='content-settings-box' hidden>
                        <p className=''></p>
                    </div>
                </div>
                <div id={this.props.sectionID + "-information"} className='information'>
                    <p id={this.props.sectionID + "-information-box"} className='information-box'>{this.props.information}</p>
                </div>
                <div id={this.props.mediaID + "-media"} className='media' style={{backgroundImage: "url(/Images/Organizations\,Corps/" + this.props.mediaID + "." + this.props.ext + ")"}}>

                </div>
            </div>
        );
    }
    
}

/** 'Directory' Class containing Sections */
class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: false
        }

        this.removeSection = this.removeSection.bind(this);
    }

    removeSection(match) {
        findVariance(match, this.props.information);
    }

    render() {
        function iter() {
            let r = [];
            for (let i = 0; i < infoList.length; i++) {
                r.push(<Section sectionID={infoList[i].sectionID} mediaID={infoList[i].mediaID} title={infoList[i].title} information={infoList[i].information} ext={infoList[i].ext}></Section>)
            }
            return r;
        }
        return (
            <div className='directory-content'>
                <div className='dir-settings'>

                </div>
                <div className='dir-content'>
                {
                    function iter() {
                        let r = [];
                        for (let i = 0; i < infoList.length; i++) {
                            r.push(<Section sectionID={infoList[i].sectionID} mediaID={infoList[i].mediaID} title={infoList[i].title} information={infoList[i].information} ext={infoList[i].ext}></Section>)
                        }
                        return r;
                    }()
                }
                </div>
            </div>
        );
    }
}
 //infoList.map(S => <Section sectionID={S.sectionID} mediaID={S.mediaID} title={S.title} information={S.information} ext={S.ext}></Section>)
/** 'Categories' component containing Categories */
class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: false
        }
    }

    render() {
        return (
            <div id='category-part' >
                { categoryList.map(C => <Category id={"category-part-" + C.id} title={C.title}></Category>) }
            </div>
        );
    }
}

/** 'Category' stateless component, part of the category-box */
const Category = (props) => {
    return (
        <div className='category-element' style={{backgroundImage: "linear-gradient(-45deg, green, red, blue, yellow)"}}>
            <div>{props.title}</div>
        </div>
    );
}

ReactDOM.render(<Categories />, document.getElementById('category'));
ReactDOM.render(<Directory />, document.getElementById('content-main'));

//=============================================================================================================================================================================================

$("#main-info-circle").on('click', function () {
    $("#info-title").css("visibility") == "hidden" ?
    $("#info-title").css("visibility", "visible") :
    $("#info-title").css("visibility", "hidden");
});
$("#main-info-circle-i").on("click", function() {
    $("#info-title").css("visibility", "hidden");
});

$("#side-bar").on('click', function() {
    if ($("#category").css("width") <= "10px") {
        $("#category").css("animation-name", "category-show");
        $("#category").css("animation-fill-mode", "forwards");
        $(".fa-caret-left").removeClass("fa-caret-left").addClass("fa-caret-right");
    }
    else {
        $("#category").css("animation-name", "category-hide");
        $("#category").css("animation-fill-mode", "backwards");
        $(".fa-caret-right").removeClass("fa-caret-right").addClass("fa-caret-left");
    }
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