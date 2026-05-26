"use client";

import Image from "next/image";
import { useState } from "react";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { AddPatternModal } from "./components/AddPatternModal";

export default function Home() {
  const [patterns, setPatterns] = useState<string>("");
  const [showAddPatternModal, setShowAddPatternModal] =
    useState<boolean>(false);

  return (
    <>
      <div className="min-h-screen">
        {/* Header */}
        <Header onOpenModal={() => setShowAddPatternModal(true)} />

        {/* Main Section */}
        <main className="p-4">
          {/* Title */}
          <div className="text-center">
            <h1 className="gradient">Patterns</h1>
          </div>

          <div className="grid grid-cols-4 gap-4 px-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>

        {showAddPatternModal && (
          <AddPatternModal onClose={() => setShowAddPatternModal(false)} />
        )}
      </div>
    </>
  );
}
