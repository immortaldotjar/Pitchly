import { createMeetingReq } from "../../api/meetingApi"
import { AnimatePresence, motion } from "motion/react"
import React, { useState } from "react"

import Input from "../Input"
import Select from "../Select"
import Button from "../Button"

import { MdClose } from "react-icons/md"

const platforms = ["Google Meet", "Zoom"]

const ScheduleMeeting = ({ open, onClose, onCreated }) => {

    const [form, setForm] = useState({
        title: "",
        platform: "",
        joinLink: "",
        withWhom: "",
        date: "",
    })

    const [err, setErr] = useState("")
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setErr("")
        setLoading(true)

        try {
            await createMeetingReq(form)

            setForm(
                {
                    title: "",
                    withWhom: "",
                    platform: "",
                    joinLink: "",
                    date: "",
                }
            )
        } catch (err) {
            setErr(err.response?.data?.message ?? "Failed to save the Meeting!")
        } finally {
            setLoading(false)
        }
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/40 center z-50"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.98 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-surface rounded-2xl p-6 w-full max-w-md space-y-4"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="font-headline-md text-body-lg font-bold text-on-surface">Add a Meeting</h3>
                            <button onClick={onClose} className="text-on-surface-variant">
                                <MdClose size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <Input
                                label="Title"
                                id="title"
                                name="title"
                                placeholder="Series A Deep Dive"
                                value={form.title}
                                onChange={handleChange}
                            />

                            <Select
                                label="Platform"
                                id="platform"
                                name="platform"
                                placeholder="Select platform"
                                options={platforms}
                                value={form.platform}
                                onChange={(e) => setForm({ ...form, platform: e.target.value })}
                            />

                            <Input
                                label="Join Link"
                                id="joinLink"
                                name="joinLink"
                                placeholder="https://meet.google.com/xxx-xxxx-xxx"
                                value={form.joinLink}
                                onChange={handleChange}
                            />

                            <Input
                                label="With (optional)"
                                id="withWhom"
                                name="withWhom"
                                placeholder="Foundry Partners"
                                value={form.withWhom}
                                onChange={handleChange}
                            />

                            <Input
                                label="Date & Time"
                                id="date"
                                name="date"
                                type="datetime-local"
                                value={form.date}
                                onChange={handleChange}
                            />

                            {err && <p className="font-body-sm text-body-sm text-error">{error}</p>}

                            <Button variant="primary" type="submit" className="w-full" disabled={loading}>
                                {loading ? "Saving..." : "Add Meeting"}
                            </Button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ScheduleMeeting