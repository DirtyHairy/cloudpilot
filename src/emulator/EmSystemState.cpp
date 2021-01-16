#include "EmSystemState.h"

#include "ChunkHelper.h"
#include "Logging.h"
#include "Savestate.h"
#include "SavestateLoader.h"
#include "SavestateProbe.h"

EmSystemState gSystemState;

namespace {
    constexpr uint32 SAVESTATE_VERSION = 1;
}

void EmSystemState::Reset() {
    uiInitialized = false;
    screenDirty = true;
}

template <typename T>
void EmSystemState::Save(T& savestate) {
    typename T::chunkT* chunk = savestate.GetChunk(ChunkType::systemState);
    if (!chunk) return;

    chunk->Put32(SAVESTATE_VERSION);

    SaveChunkHelper helper(*chunk);
    DoSaveLoad(helper);
}

template void EmSystemState::Save(Savestate& savestate);
template void EmSystemState::Save(SavestateProbe& savestate);

void EmSystemState::Load(SavestateLoader& loader) {
    Chunk* chunk = loader.GetChunk(ChunkType::systemState);
    if (!chunk) return;

    if (chunk->Get32() != SAVESTATE_VERSION) {
        logging::printf("error restoring SystemState: savestate version mismatch");
        loader.NotifyError();

        return;
    }

    LoadChunkHelper helper(*chunk);
    DoSaveLoad(helper);
}

template <typename T>
void EmSystemState::DoSaveLoad(T& helper) {
    helper.Do32(osVersion).DoBool(uiInitialized).DoString(hotsyncUserName, dlkMaxUserNameLength);
}

void EmSystemState::SetOSVersion(uint32 version) { osVersion = version; }

uint32 EmSystemState::OSVersion(void) const { return osVersion; }

uint32 EmSystemState::OSMajorMinorVersion(void) const {
    return OSMajorVersion() * 10 + OSMinorVersion();
}

uint32 EmSystemState::OSMajorVersion(void) const { return sysGetROMVerMajor(osVersion); }

uint32 EmSystemState::OSMinorVersion(void) const { return sysGetROMVerMinor(osVersion); }

void EmSystemState::SetUIInitialized() { uiInitialized = true; }

bool EmSystemState::IsUIInitialized() const { return uiInitialized; }

void EmSystemState::SetHotsyncUserName(string hotsyncUserName) {
    if (hotsyncUserName.size() > dlkMaxUserNameLength) return;

    this->hotsyncUserName = hotsyncUserName;
}
string EmSystemState::GetHotsyncUserName() const { return hotsyncUserName; };

bool EmSystemState::IsScreenDirty() const { return screenDirty; }

void EmSystemState::MarkScreenClean() {
    screenDirty = false;
    onMarkScreenClean.Dispatch();
}
