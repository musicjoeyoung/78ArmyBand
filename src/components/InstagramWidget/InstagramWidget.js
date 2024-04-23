import "./InstagramWidget.scss"
import { useEffect } from 'react';

const BeholdWidget = () => {
    useEffect(() => {
        // Load the script only if the 'noModule' is supported
        if ('noModule' in HTMLScriptElement.prototype) {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = 'https://w.behold.so/widget.js';
            document.body.appendChild(script);
        }
    }, []);

    return (
        <>
            <h2>Instagram</h2>
            <div className="widget-container">
                <behold-widget feed-id="XgBVNYTughxOk5j3XA6N"></behold-widget>
            </div>
        </>
    )
        ;
};

export default BeholdWidget;
