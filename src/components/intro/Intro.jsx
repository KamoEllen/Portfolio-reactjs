import './intro.css';

const Intro = () => {
    return (
        <div className="i">
   <div className="i-left">
    <div className="i-left-wrapper">
        <h2 className="i-intro">Hello, My Name Is </h2>
        <h1 className="i-name">Kamogelo Ellen Kganakga</h1>
        <div className="i-title">
            <div className="i-title-wrapper">
                <div className="i-title-item">Web DEVELOPER</div>
                <div className="i-title-item">UI/UX DESIGNER</div>
                <div className="i-title-item">PHOTOGRAPHER</div>
                <div className="i-title-item">WRITER</div>
                <div className="i-title-item">CONTENT CREATOR</div>
            </div>
        
        
        </div>
        <div className="i-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>
    </div><div className="i-right">
            <div className="i-bg"></div>
    <img className="i-img" src="https://o.remove.bg/downloads/e790e7e5-9fed-451f-aaf5-822b7e46ceb2/108501662-removebg-preview.png" alt="" />
   </div>
        </div>
    )
}
export default Intro