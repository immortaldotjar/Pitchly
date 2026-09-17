const AuthFooterNote = () => {

    const handleTos = () => {
        window.open("/TermsOfService", "_blank");
    };

    const handlePolicy = () => {
        window.open("/PrivacyPolicy", "_blank");
    };
    return (
        <p className="mt-3 text-center font-body-sm text-xs leading-relaxed text-outline">
            By continuing, you agree to Pitchly's{" "}
            <span onClick={handleTos} className="underline cursor-pointer">Terms of Service</span> and{" "}
            <span onClick={handlePolicy} className="underline cursor-pointer">Privacy Policy</span>.
        </p>
    );
}

export default AuthFooterNote