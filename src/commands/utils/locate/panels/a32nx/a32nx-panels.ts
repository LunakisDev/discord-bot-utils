import { Panel } from '../panel';
import { accuPressPanel, autobrakeAndGearPanel, clockPanel, dcdu, ewd, instrumentLightingPanel, isis, nd, pfd, sd } from './front-panel';
import { efisPanel, fcuPanel, lightKnobsPanel, warningPanel } from './glareshield';
import { antiIcePanel, adirsPanel, apuPanel, callsPanel, cvrPanel, emerElecPwrPanel, evacPanel, extLtPanel, fltCtlPanel, gpwsPanel, intLtPanel, oxyPanel, paVideoPanel, signsPanel, wiperPanel, cabinPressPanel, airCondPanel, elecPanel, fuelPanel, hydPanel, firePanel, engManStartPanel, ventilationPanel, cargoSmokePanel, cargoVentPanel, thirdACP, readingLightsJumpSeats, cockpitDoorIndicatorPanel, eltPanel, pedestalLightPanel, emerCbPanel, fmsLoadPanel, maintenancePanel } from './overhead';
import { aidsDfdrPanel, atcTcasPanel, captPedestalLightingPanel, cockpitDoorPanel, console, ecamControlPanel, engPanel, flaps, gravityGearExtensionPanel, mcdu, parkBrkPanel, printer, rmpAcpPanel, rudderTrim, speedBrake, switchingPanel, thrLvrPitchTrim, wxPanel } from './pedestal';
import { rearBackCbPanel } from './rear-cb-panel';

export const a32nxPanels: Panel[] = [
    // OVERHEAD
    wiperPanel,
    callsPanel,
    oxyPanel,
    cvrPanel,
    gpwsPanel,
    emerElecPwrPanel,
    evacPanel,
    fltCtlPanel,
    adirsPanel,
    paVideoPanel,
    extLtPanel,
    apuPanel,
    signsPanel,
    intLtPanel,
    antiIcePanel,
    cabinPressPanel,
    airCondPanel,
    elecPanel,
    fuelPanel,
    hydPanel,
    firePanel,
    engManStartPanel,
    ventilationPanel,
    cargoSmokePanel,
    cargoVentPanel,
    thirdACP,
    readingLightsJumpSeats,
    cockpitDoorIndicatorPanel,
    eltPanel,
    pedestalLightPanel,
    emerCbPanel,
    rearBackCbPanel,
    fmsLoadPanel,
    maintenancePanel,

    // GLARESHIELD
    warningPanel,
    efisPanel,
    fcuPanel,
    lightKnobsPanel,

    // FRONT PANEL
    instrumentLightingPanel,
    pfd,
    nd,
    isis,
    dcdu,
    ewd,
    sd,
    autobrakeAndGearPanel,
    clockPanel,
    accuPressPanel,

    // PEDESTAL
    console,
    mcdu,
    rmpAcpPanel,
    captPedestalLightingPanel,
    wxPanel,
    speedBrake,
    cockpitDoorPanel,
    switchingPanel,
    ecamControlPanel,
    thrLvrPitchTrim,
    engPanel,
    rudderTrim,
    parkBrkPanel,
    gravityGearExtensionPanel,
    aidsDfdrPanel,
    atcTcasPanel,
    flaps,
    printer,
];
