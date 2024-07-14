import './globals.css'
import HeroHeader from "./component/HeroHeader/hero-header.component";
import About from './component/About/about.component';

export default function Home() {
    return (
        <div className={`bg-slate-800 text-white`}>
            <HeroHeader />
            <About />
        </div>
    );
};