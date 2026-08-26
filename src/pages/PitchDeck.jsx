import { useState } from "react"
import PitchDeckHeader from "../components/UserComps/PitchDeck/PitchDeckHeader"
import UploadZone from "../components/UserComps/PitchDeck/UploadZone"
import SlideCarousel from "../components/UserComps/PitchDeck/SlideCarousel"
import DeckStatsPanel from "../components/UserComps/PitchDeck/DeckStatsPanel"
import DeckInfoPanel from "../components/UserComps/PitchDeck/DeckInfoPanel"
import VersionHistoryList from "../components/UserComps/PitchDeck/VersionHistoryList"
import { mockDeck } from "../config/pitchDeckConfig"

const PitchDeck = () => {

    const [deck, setDeck] = useState(mockDeck)
    const [uploading, setUploading] = useState(false)

    const handleFileSelected = (file) => {
        setUploading(true)
        setTimeout(() => {
            setDeck({ ...mockDeck, fileName: file.name })
            setUploading(false)
        }, 1200)
    }

    const handleReplace = () => setDeck(null)
    const handleDownload = (versionId) => console.log("download", versionId ?? deck.fileName)
    const handleShare = () => console.log("share public link")
    const handleRestore = (versionId) => console.log("restore version", versionId)

    return (
        <>
            <PitchDeckHeader />

            {!deck ? (
                <UploadZone onFileSelected={handleFileSelected} uploading={uploading} />
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    <div className="lg:col-span-2">
                        <SlideCarousel slides={deck.slides} />
                    </div>

                    <div className="space-y-6">
                        <DeckStatsPanel stats={deck.stats} />
                        <DeckInfoPanel
                            fileName={deck.fileName}
                            size={deck.size}
                            updatedAt={deck.updatedAt}
                            visibility={deck.visibility}
                            onReplace={handleReplace}
                            onDownload={() => handleDownload()}
                            onShare={handleShare}
                        />
                        <VersionHistoryList
                            versions={deck.versions}
                            onRestore={handleRestore}
                            onDownload={handleDownload}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default PitchDeck