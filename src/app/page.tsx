import './globals.css'
import HeroHeader from "./component/HeroHeader/hero-header.component";

export default function Home() {
    return (
        <div className={`bg-slate-800`}>
            <HeroHeader />
        </div>
    );
};