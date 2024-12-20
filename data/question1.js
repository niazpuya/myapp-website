// Questions by category
const questionsByCategory =
{
    networking:
        [
            {
                question: "1.Was ist der Unterschied zwischen digitalen und analogen Informationen?",
                answers:
                    [
                        "Digital: kontinuierliche Werte, Analog: diskrete Werte",
                        "Digital: diskrete Werte, Analog: kontinuierliche Werte",
                        "Beide sind diskret",
                        "Beide sind kontinuierlich"
                    ],
                correct: ["Digital: diskrete Werte, Analog: kontinuierliche Werte"],
                explanation: "Digitale Informationen werden durch diskrete Werte (z.B. 0 und 1) dargestellt, während analoge Informationen durch kontinuierliche physikalische Größen dargestellt werden."
            },
            {
                question: "2. Welche Rolle spielt die Root-Bridge im Spanning-Tree-Algorithmus?",
                answers: [
                    "Sie leitet alle Datenpakete im Netzwerk weiter.",
                    "Sie ist die zentrale Bridge zur Berechnung der Pfade im Netzwerk.",
                    "Sie speichert alle MAC-Adressen im Netzwerk.",
                    "Sie verhindert Datenverluste im Netzwerk."
                ],
                correct: ["Sie ist die zentrale Bridge zur Berechnung der Pfade im Netzwerk."],
                explanation: "Die Root-Bridge ist der zentrale Knoten im Spanning-Tree-Algorithmus und sorgt dafür, dass keine Schleifen im Netzwerk auftreten."
            },
            {
                question: "3. Wie viele Broadcast-Domänen gibt es in einem Netzwerk mit einem Switch und einem Router?",
                answers: [
                    "1 Broadcast-Domäne",
                    "2 Broadcast-Domänen",
                    "Keine Broadcast-Domäne",
                    "5 Broadcast-Domänen"
                ],
                correct: ["2 Broadcast-Domänen"],
                explanation: "Router begrenzen Broadcast-Domänen, daher gibt es eine Broadcast-Domäne pro Segment, wenn ein Router vorhanden ist."
            },
            {
                question: "4. Was passiert, wenn ein Router keine Route zu einem Ziel in der Routing-Tabelle findet?",
                answers: [
                    "Das Paket wird an das Standard-Gateway gesendet.",
                    "Das Paket wird automatisch verworfen.",
                    "Das Paket wird erneut an den Absender geschickt.",
                    "Der Router speichert das Paket für später."
                ],
                correct: ["Das Paket wird an das Standard-Gateway gesendet."],
                explanation: "Wenn ein Router keine spezifische Route findet, leitet er das Paket an das Standard-Gateway weiter."
            },
            {
                question: "5. Wie funktioniert der Spanning-Tree-Algorithmus?",
                answers: [
                    "Er eliminiert Schleifen und stellt sicher, dass es einen einzigen logischen Pfad durch das Netzwerk gibt.",
                    "Er berechnet die schnellste Route für Datenpakete durch ein Netzwerk.",
                    "Er bestimmt die IP-Adressen der Router im Netzwerk.",
                    "Er teilt Broadcast-Domänen in kleinere Subnetze auf."
                ],
                correct: ["Er eliminiert Schleifen und stellt sicher, dass es einen einzigen logischen Pfad durch das Netzwerk gibt."],
                explanation: "Der Spanning-Tree-Algorithmus sorgt dafür, dass es keine Schleifen im Netzwerk gibt, indem er redundante Pfade deaktiviert."
            },
            {
                question: "6. Wofür wird das Protokoll ARP (Address Resolution Protocol) verwendet?",
                answers: [
                    "Es übersetzt IP-Adressen in MAC-Adressen.",
                    "Es leitet Pakete zwischen verschiedenen Netzwerken weiter.",
                    "Es steuert den Zugriff auf das physische Medium.",
                    "Es übersetzt Domänennamen in IP-Adressen."
                ],
                correct: ["Es übersetzt IP-Adressen in MAC-Adressen."],
                explanation: "ARP wird verwendet, um IP-Adressen in MAC-Adressen auf Layer 2 des OSI-Modells aufzulösen."
            },
            {
                question: "7. Was ist das Prinzip von Cut-Through-Switching?",
                answers: [
                    "Pakete werden direkt nach Empfang der Zieladresse weitergeleitet.",
                    "Pakete werden vollständig empfangen, auf Fehler überprüft und dann weitergeleitet.",
                    "Pakete werden fragmentiert, um sie effizienter zu übertragen.",
                    "Pakete werden komprimiert, um die Netzwerkauslastung zu minimieren."
                ],
                correct: ["Pakete werden direkt nach Empfang der Zieladresse weitergeleitet."],
                explanation: "Cut-Through-Switching reduziert die Latenz, indem Pakete sofort nach Empfang der Zieladresse weitergeleitet werden, ohne auf den vollständigen Empfang des Pakets zu warten."
            },
            {
                question: "8.Was ist eine Broadcast-Domäne in einem Netzwerk?",
                answers: [
                    "Ein Netzwerksegment, in dem alle Geräte Broadcasts empfangen können.",
                    "Ein Netzwerksegment, das alle Datenpakete gleichzeitig sendet.",
                    "Ein Netzwerksegment, das alle Datenkollisionen verhindert.",
                    "Ein Netzwerksegment, das Router verbindet."
                ],
                correct: ["Ein Netzwerksegment, in dem alle Geräte Broadcasts empfangen können."],
                explanation: "Eine Broadcast-Domäne umfasst alle Geräte, die einen Broadcast empfangen können, und wird typischerweise durch Router begrenzt."
            },
            {
                question: "9. Wie funktioniert der Spanning-Tree-Algorithmus?",
                answers: [
                    "Er eliminiert Schleifen und stellt sicher, dass es einen einzigen logischen Pfad gibt.",
                    "Er berechnet den kürzesten Pfad zu allen Netzwerkgeräten.",
                    "Er speichert alle MAC-Adressen im Netzwerk.",
                    "Er sorgt für die Synchronisation der Datenübertragung zwischen verschiedenen Geräten."
                ],
                correct: ["Er eliminiert Schleifen und stellt sicher, dass es einen einzigen logischen Pfad gibt."],
                explanation: "Der Spanning-Tree-Algorithmus verhindert Netzwerkschleifen und stellt sicher, dass nur ein logischer Pfad für die Übertragung verwendet wird."
            },
            {
                question: "10. Was ist eine Kollisionsdomäne?",
                answers: [
                    "Ein Netzwerksegment, in dem Datenkollisionen auftreten können.",
                    "Ein Netzwerksegment, das für den Datenverlust verantwortlich ist.",
                    "Ein Netzwerksegment, in dem Broadcasts gefiltert werden.",
                    "Ein Netzwerksegment, das nur in drahtlosen Netzwerken existiert."
                ],
                correct: ["Ein Netzwerksegment, in dem Datenkollisionen auftreten können."],
                explanation: "Eine Kollisionsdomäne ist ein Netzwerkbereich, in dem Datenkollisionen auftreten können, wenn mehrere Geräte gleichzeitig senden."
            },
            {
                question: "11. Welche Funktion erfüllt die Root-Bridge im Spanning-Tree-Algorithmus?",
                answers: [
                    "Sie ist die zentrale Bridge zur Berechnung der Pfade im Netzwerk.",
                    "Sie speichert alle Netzwerkkonfigurationen.",
                    "Sie regelt die Zugriffsrechte auf alle Netzwerkgeräte.",
                    "Sie sendet alle Datenpakete an das Standard-Gateway."
                ],
                correct: ["Sie ist die zentrale Bridge zur Berechnung der Pfade im Netzwerk."],
                explanation: "Die Root-Bridge ist das Zentrum des Spanning-Tree-Algorithmus und sorgt dafür, dass alle Pfade im Netzwerk optimal konfiguriert werden."
            },
            {
                question: "12. Was ist eine Broadcast-Domäne?",
                answers: [
                    "Ein Netzwerksegment, in dem alle Geräte Broadcast-Nachrichten empfangen.",
                    "Ein Segment, das nur Unicast-Nachrichten sendet.",
                    "Ein Netzwerksegment, das ausschließlich zur Fehlererkennung dient.",
                    "Ein Segment, das den Datenverkehr vollständig isoliert."
                ],
                correct: ["Ein Netzwerksegment, in dem alle Geräte Broadcast-Nachrichten empfangen."],
                explanation: "Eine Broadcast-Domäne ist ein Netzwerkbereich, in dem alle angeschlossenen Geräte Broadcast-Nachrichten empfangen können."
            },
            {
                question: "13. Was bedeutet Cut-Through-Switching?",
                answers: [
                    "Pakete werden direkt nach Empfang der Zieladresse weitergeleitet.",
                    "Pakete werden vollständig empfangen und auf Fehler geprüft.",
                    "Pakete werden komprimiert und dann weitergeleitet.",
                    "Pakete werden nur bei einem bestimmten Fehlerzustand weitergeleitet."
                ],
                correct: ["Pakete werden direkt nach Empfang der Zieladresse weitergeleitet."],
                explanation: "Beim Cut-Through-Switching werden Pakete sofort weitergeleitet, sobald die Zieladresse empfangen wurde, was die Latenzzeit minimiert."
            },
            


            // More questions can be added here...
        ],
    // Other categories with questions
    command:
        [
            {
                question: "1. Was zeigt der Befehl 'route print' an?",
                answers: [
                    "Die aktuelle Routing-Tabelle des Systems.",
                    "Die Bandbreitennutzung im Netzwerk.",
                    "Den Status der Netzwerkadapter.",
                    "Eine Liste der aktiven MAC-Adressen im Netzwerk."
                ],
                correct: ["Die aktuelle Routing-Tabelle des Systems."],
                explanation: "'route print' zeigt die aktuelle Routing-Tabelle an, die Informationen über alle bekannten Routen im Netzwerk enthält."
            },
            {
                question: "2. Was passiert, wenn ein Router keine Route zu einem Ziel findet?",
                answers: [
                    "Das Paket wird an das Standard-Gateway weitergeleitet.",
                    "Das Paket wird automatisch gelöscht.",
                    "Das Paket wird zurück an den Absender geschickt.",
                    "Das Paket wird in einer Warteschlange gespeichert."
                ],
                correct: ["Das Paket wird an das Standard-Gateway weitergeleitet."],
                explanation: "Wenn der Router keine spezifische Route findet, leitet er das Paket an das Standard-Gateway weiter, das dann über den nächsten Schritt entscheidet."
            },
            {
                question: "3. Was passiert, wenn eine Route in der Routing-Tabelle nicht gefunden wird?",
                answers: [
                    "Das Paket wird an das Standard-Gateway gesendet.",
                    "Das Paket wird verworfen.",
                    "Das Paket wird erneut gesendet.",
                    "Das Paket wird an den Absender zurückgeschickt."
                ],
                correct: ["Das Paket wird an das Standard-Gateway gesendet."],
                explanation: "Wenn eine Route nicht gefunden wird, leitet der Router das Paket an das Standard-Gateway weiter."
            },
            {
                question: "4. Was zeigt der Befehl 'route print' an?",
                answers: [
                    "Die aktuelle Routing-Tabelle des Systems.",
                    "Die IP-Adresse des Routers.",
                    "Die MAC-Adresse des Computers.",
                    "Den Datendurchsatz im Netzwerk."
                ],
                correct: ["Die aktuelle Routing-Tabelle des Systems."],
                explanation: "'route print' zeigt die Routing-Tabelle des Systems, die alle bekannten Routen und deren Netzwerke enthält."
            },
            {
                question: "5. Welchen Zweck hat der Befehl Ping?",
                answers: [
                    "Er überprüft die IP-Konnektivität mit einem anderen Computer.",
                    "Er zeigt die Routingtabelle des Netzwerks an.",
                    "Er öffnet eine Remote-Verbindung zum Server.",
                    "Er überwacht die Netzwerkbandbreite."
                ],
                correct: ["Er überprüft die IP-Konnektivität mit einem anderen Computer."],
                explanation: "Der Befehl 'Ping' sendet ICMP-Echoanforderungen an eine Ziel-IP-Adresse und prüft, ob diese erreichbar ist, um Netzwerkverbindungen zu testen."
            },
            {
                question: "6. Was zeigt der Befehl Tracert an?",
                answers: [
                    "Eine Liste aller Netzwerkgeräte im lokalen Netzwerk.",
                    "Die Route zu einem Zielcomputer durch eine Reihe von Routern.",
                    "Die offenen Ports auf einem Computer.",
                    "Die Geschwindigkeit des gesamten Netzwerks."
                ],
                correct: ["Die Route zu einem Zielcomputer durch eine Reihe von Routern."],
                explanation: "Tracert verfolgt den Pfad von Datenpaketen zu einem Ziel, indem es die Router auflistet, die das Paket durchläuft."
            },
            {
                question: "7. Wie unterscheidet sich Pathping von Tracert?",
                answers: [
                    "Pathping zeigt detaillierte Statistiken für jeden Schritt der Route.",
                    "Pathping ist nur für lokale Netzwerke verwendbar.",
                    "Tracert zeigt detaillierte Statistiken für jeden Schritt der Route.",
                    "Pathping ist langsamer als Tracert, liefert aber keine zusätzlichen Informationen."
                ],
                correct: ["Pathping zeigt detaillierte Statistiken für jeden Schritt der Route."],
                explanation: "Pathping kombiniert Funktionen von Ping und Tracert, liefert dabei detaillierte Statistiken zu Paketverlusten auf jedem Hop."
            },
            {
                question: "8. Welche Informationen können Sie mit dem Befehl Netstat anzeigen?",
                answers: [
                    "Nur die IP-Adresse des Computers.",
                    "Netzwerkverbindungen und offene Ports.",
                    "Die Betriebssystemversion des Computers.",
                    "Die Bandbreite der Netzwerkverbindung."
                ],
                correct: ["Netzwerkverbindungen und offene Ports."],
                explanation: "Netstat zeigt aktive Netzwerkverbindungen und Ports sowie laufende Netzwerkdienste auf einem Computer an."
            },
            {
                question: "9. Wie können Sie überprüfen, ob ein bestimmter Serverport aktiv ist?",
                answers: [
                    "Mit dem Befehl Ping.",
                    "Mit dem Befehl Tracert.",
                    "Mit dem Befehl Telnet.",
                    "Mit dem Befehl Route."
                ],
                correct: ["Mit dem Befehl Telnet."],
                explanation: "Telnet kann eine Verbindung zu einem spezifischen Server und Port herstellen, um zu prüfen, ob dieser erreichbar ist."
            },
            {
                question: "10. Wofür wird das Tool Ressourcenmonitor <resmon> verwendet?",
                answers: [
                    "Zum Anzeigen der CPU-Auslastung.",
                    "Zum Überwachen der Netzwerkbandbreite.",
                    "Zum Überprüfen der TCP- oder UDP-Ports.",
                    "Zum Überprüfen von Dateiänderungen."
                ],
                correct: ["Zum Überprüfen der TCP- oder UDP-Ports."],
                explanation: "Der Ressourcenmonitor <resmon> kann anzeigen, welche Programme auf bestimmte TCP- oder UDP-Ports zugreifen, und bietet Echtzeit-Überwachung."
            },
            {
                question: "11. Welche Informationen finden Sie in der Ereignisanzeige <eventviewer>?",
                answers: [
                    "Eine Liste aller Netzwerkgeräte.",
                    "Eine Liste der offenen TCP-Ports.",
                    "Aufzeichnungen wichtiger Systemereignisse und Fehler.",
                    "Informationen über die IP-Adresse eines Routers."
                ],
                correct: ["Aufzeichnungen wichtiger Systemereignisse und Fehler."],
                explanation: "Die Ereignisanzeige <eventviewer> protokolliert Systemereignisse und Fehler, die bei der Diagnose und Fehlerbehebung helfen."
            },
            {
                question: "12. Welchen Zweck hat das Windows-Netzwerkdiagnosetool?",
                answers: [
                    "Es hilft, Netzwerkprobleme zu diagnostizieren und zu beheben.",
                    "Es zeigt die Nutzung des Arbeitsspeichers an.",
                    "Es überwacht die Netzwerkkonnektivität zu einem Router.",
                    "Es zeigt eine Liste der installierten Netzwerktreiber."
                ],
                correct: ["Es hilft, Netzwerkprobleme zu diagnostizieren und zu beheben."],
                explanation: "Das Windows-Netzwerkdiagnosetool analysiert Netzwerkprobleme und bietet Lösungsvorschläge zur Behebung."
            },
            {
                question: "13. Welcher Befehl zeigt die aktuelle IP-Konfiguration des Hosts an?",
                answers: [
                    "ipconfig",
                    "netstat",
                    "ping",
                    "route"
                ],
                correct: ["ipconfig"],
                explanation: "'ipconfig' zeigt die IP-Adressinformationen eines Hosts, einschließlich Subnetzmasken und Standardgateways."
            },
            {
                question: "14. Welche PowerShell-Cmdlets können zum Anzeigen der Routingtabelle verwendet werden?",
                answers: [
                    "Get-NetRoute",
                    "Show-Routes",
                    "Route-Display",
                    "Netstat"
                ],
                correct: ["Get-NetRoute"],
                explanation: "'Get-NetRoute' zeigt die aktuelle Routingtabelle und die definierten Routen auf dem System."
            },
            {
                question: "15. Welcher Befehl zeigt die aktuelle IPv4-Konfiguration eines Hosts an?",
                answers: [
                    "ipconfig",
                    "ping",
                    "netstat",
                    "route print"
                ],
                correct: ["ipconfig"],
                explanation: "Mit 'ipconfig' können die aktuellen Netzwerkkonfigurationen, wie IP-Adressen und Subnetzmasken, angezeigt werden."
            },
            {
                question: "16. Welches Tool kann die Route zu einem Zielcomputer ermitteln?",
                answers: [
                    "tracert",
                    "ping",
                    "ipconfig",
                    "telnet"
                ],
                correct: ["tracert"],
                explanation: "'Tracert' zeigt die Route, die ein Datenpaket zu einem Zielcomputer durch das Netzwerk nimmt."
            },
            {
                question: "17. Welche Funktion hat der Befehl 'ping'?",
                answers: [
                    "Er testet die Konnektivität zu einem anderen Host.",
                    "Er zeigt die aktive Routingtabelle an.",
                    "Er konfiguriert eine statische IP-Adresse.",
                    "Er verbindet sich mit einem Serverport."
                ],
                correct: ["Er testet die Konnektivität zu einem anderen Host."],
                explanation: "Der Befehl 'ping' sendet ICMP-Anfragen, um die Netzwerkverbindung zu einem anderen Host zu prüfen."
            },
            {
                question: "18. Mit welchem Tool können Sie Netzwerkverbindungen und Statistiken anzeigen?",
                answers: [
                    "netstat",
                    "ping",
                    "tracert",
                    "ipconfig"
                ],
                correct: ["netstat"],
                explanation: "'Netstat' zeigt aktive Netzwerkverbindungen, Protokolle und Statistiken des aktuellen Netzwerks an."
            },
            {
                question: "19. Wie können Sie überprüfen, ob ein bestimmter Port auf einem Server aktiv ist?",
                answers: [
                    "Mit dem Befehl 'telnet'.",
                    "Mit dem Befehl 'ping'.",
                    "Mit dem Befehl 'ipconfig'.",
                    "Mit dem Befehl 'netstat'."
                ],
                correct: ["Mit dem Befehl 'telnet'."],
                explanation: "'Telnet' prüft, ob ein bestimmter Port auf einem Server erreichbar und aktiv ist."
            },
            {
                question: "20. Welches Windows PowerShell-Cmdlet zeigt die Routingtabelle eines Computers an?",
                answers: [
                    "Get-NetRoute",
                    "Get-NetIPInterface",
                    "Test-NetConnection",
                    "Get-NetAdapter"
                ],
                correct: ["Get-NetRoute"],
                explanation: "'Get-NetRoute' zeigt die Routingtabelle eines Computers an, die Informationen über Netzwerkpfade enthält."
            },
            {
                question: "21. Was speichert das Ereignisprotokoll in Windows?",
                answers:
                [
                    "Wichtige Systemereignisse und Fehler.",
                    "Alle Benutzeraktivitäten.",
                    "Alle geöffneten Ports.",
                    "Den Netzwerkverkehr."
                ],
                correct: ["Wichtige Systemereignisse und Fehler."],
                explanation: "Das Ereignisprotokoll dokumentiert Systemereignisse und Fehlermeldungen, die für die Fehlerbehebung verwendet werden können."
            },
            {
                question: "22. Welches Tool kann Netzwerkprobleme automatisch diagnostizieren und beheben?",
                answers: [
                    "Windows-Netzwerkdiagnose",
                    "ipconfig",
                    "tracert",
                    "netstat"
                ],
                correct: ["Windows-Netzwerkdiagnose"],
                explanation: "Die Windows-Netzwerkdiagnose analysiert Netzwerkeinstellungen und hilft, Probleme automatisch zu erkennen und zu beheben."
            },
            {
                question: "23. Welche IPv4-Einstellung weist auf eine fehlende Verbindung zu einem DHCP-Server hin?",
                answers: [
                    "Eine APIPA-Adresse (169.254.x.x)",
                    "Eine Adresse der Klasse B",
                    "Eine Adresse der Klasse C",
                    "Eine öffentliche IP-Adresse"
                ],
                correct: ["Eine APIPA-Adresse (169.254.x.x)"],
                explanation: "Eine APIPA-Adresse weist darauf hin, dass der Host keine IP-Adresse vom DHCP-Server erhalten konnte."
            },
            {
                question: "24. Welches Cmdlet verwendet Windows PowerShell für die Überprüfung der Netzwerkkonnektivität?",
                answers: [
                    "Test-Connection",
                    "Get-NetAdapter",
                    "Set-NetIPAddress",
                    "ipconfig"
                ],
                correct: ["Test-Connection"],
                explanation: "'Test-Connection' sendet Ping-Anfragen, um die Netzwerkkonnektivität zu einem Ziel zu testen."
            },
            {
                question: "25. Welches Cmdlet aktualisiert die Netzwerkkonfiguration auf einem Windows-Computer?",
                answers: [
                    "Restart-NetAdapter",
                    "Get-NetIPAddress",
                    "Set-DnsClient",
                    "Get-NetRoute"
                ],
                correct: ["Restart-NetAdapter"],
                explanation: "'Restart-NetAdapter' wird verwendet, um die Netzwerkkonfiguration neu zu laden und Adapterprobleme zu beheben."
            }

        ],
    OSI:
        [
            {
                question: "1. Was macht das XOR (Exklusiv-Oder) in RAID 5?",
                answers: [
                    "Es berechnet die Parität, um Daten wiederherzustellen",
                    "Es kopiert Daten zwischen Festplatten",
                    "Es sichert die Datenverschlüsselung",
                    "Es organisiert die Reihenfolge der Daten"
                ],
                correct: ["Es berechnet die Parität, um Daten wiederherzustellen"],
                explanation: "In RAID 5 wird XOR verwendet, um die Parität zu berechnen, die bei einem Festplattenausfall die Wiederherstellung der Daten ermöglicht."
            },
            {
                question: "2. Was beschreibt die Schaltalgebra?",
                answers: [
                    "Mathematische Logik für logische Verknüpfungen",
                    "Eine Methode zur Addition von Dualzahlen",
                    "Die Reihenfolge der Signale in einem Computer",
                    "Ein Algorithmus zur Datenkompression"
                ],
                correct: ["Mathematische Logik für logische Verknüpfungen"],
                explanation: "Die Schaltalgebra beschreibt mathematisch logische Verknüpfungen wie UND, ODER und NICHT."
            },
            {
                question: "3. Welche Schicht des OSI-Modells ist für die Datenverschlüsselung zuständig?",
                answers: [
                    "Darstellungsschicht <Presentation Layer> (Schicht 6)",
                    "Transportschicht <Transport Layer> (Schicht 4)",
                    "Anwendungsschicht <Application Layer> (Schicht 7)",
                    "Sicherungsschicht <Data Link Layer> (Schicht 2)"
                ],
                correct: ["Darstellungsschicht <Presentation Layer> (Schicht 6)"],
                explanation: "Die Darstellungsschicht ist für die Datenverschlüsselung und die Konvertierung von Daten in ein für die Anwendung verständliches Format verantwortlich."
            },
            {
                question: "4. Wofür wird der Befehl 'route print' verwendet?",
                answers: [
                    "Zeigt die aktuelle Routingtabelle des Systems an.",
                    "Startet den Routingdienst neu.",
                    "Setzt die Routingtabelle zurück.",
                    "Ermöglicht die Erstellung statischer Routen."
                ],
                correct: ["Zeigt die aktuelle Routingtabelle des Systems an."],
                explanation: "Der Befehl 'route print' zeigt die aktuelle Routingtabelle des Computers an."
            },
            {
                question: "5. Was ist der Unterschied zwischen RAID 5 und RAID 6?",
                answers: [
                    "RAID 6 nutzt doppelte Parität und kann den Ausfall von zwei Festplatten verkraften während RAID 5 nur einen Festplattenausfall tolerieren kann",
                    "RAID 6 verwendet keine Parität, sondern vollständige Kopien",
                    "RAID 5 ist schneller als RAID 6 bei Schreiboperationen",
                    "RAID 6 kann keine Daten wiederherstellen, wenn eine Festplatte ausfällt"
                ],
                correct: ["RAID 6 nutzt doppelte Parität und kann den Ausfall von zwei Festplatten verkraften während RAID 5 nur einen Festplattenausfall tolerieren kann"],
                explanation: "RAID 6 verwendet doppelte Paritätsblöcke, was es ermöglicht, den Ausfall von zwei Festplatten zu überstehen, während RAID 5 nur einen Festplattenausfall tolerieren kann."
            },
            {
                question: "6. Welche Rolle spielt der XOR-Operator in RAID 5?",
                answers: [
                    "Er kopiert Daten von einer Festplatte zur anderen.",
                    "Er berechnet die Parität, um Daten wiederherzustellen.",
                    "Er verschlüsselt die Daten für eine sichere Speicherung.",
                    "Er komprimiert die Daten für eine bessere Nutzung des Speicherplatzes."
                ],
                correct: ["Er berechnet die Parität, um Daten wiederherzustellen."],
                explanation: "XOR wird in RAID 5 verwendet, um Paritätsdaten zu berechnen, die zur Wiederherstellung fehlender Informationen verwendet werden können."
            },
            {
                question: "7. Welche Aufgaben erfüllt die Sicherungsschicht <Data link Layer> (Schicht 2) des OSI-Modells?",
                answers: [
                    "Sie stellt die End-to-End-Verbindung her.",
                    "Sie verschlüsselt die Daten.",
                    "Sie sorgt für die fehlerfreie Übertragung von Daten zwischen zwei benachbarten Knoten.",
                    "Sie verwaltet die Sitzung zwischen zwei Endgeräten."
                ],
                correct: ["Sie sorgt für die fehlerfreie Übertragung von Daten zwischen zwei benachbarten Knoten."],
                explanation: "Die Sicherungsschicht sorgt für die fehlerfreie Übertragung von Daten zwischen Knoten durch Framing und Fehlerkorrektur."
            },
            {
                question: "8. Was ist das RAID-Dreieck?",
                answers: [
                    "Es beschreibt die Beziehung zwischen RAID-Performance, Speicherplatz und Datensicherheit.",
                    "Es ist ein spezielles Format für RAID-Arrays.",
                    "Es ist ein redundantes Datenformat für Fehlerkorrektur.",
                    "Es ist ein Format zur Erhöhung der Schreibgeschwindigkeit."
                ],
                correct: ["Es beschreibt die Beziehung zwischen RAID-Performance, Speicherplatz und Datensicherheit."],
                explanation: "Das RAID-Dreieck zeigt den Kompromiss zwischen Leistung, Speicherkapazität und Datensicherheit in RAID-Systemen auf."
            },
            {
                question: "9. Was ist der Hauptunterschied zwischen RAID 5 und RAID 6?",
                answers: [
                    "RAID 6 verwendet eine doppelte Parität und toleriert den Ausfall von zwei Festplatten.",
                    "RAID 6 verwendet keine Parität, sondern nur Spiegelungen.",
                    "RAID 5 kann zwei Festplattenausfälle verkraften.",
                    "RAID 5 hat eine bessere Schreibperformance als RAID 6."
                ],
                correct: ["RAID 6 verwendet eine doppelte Parität und toleriert den Ausfall von zwei Festplatten während RAID 5 nur einen Festplattenausfall toleriert."],
                explanation: "RAID 6 kann durch die doppelte Parität den Ausfall von zwei Festplatten verkraften, während RAID 5 nur einen Festplattenausfall toleriert."
            },
            {
                question: "10. Welche Eigenschaft hat das RAID 6 im Vergleich zu RAID 5?",
                answers: [
                    "RAID 6 kann zwei Festplattenausfälle verkraften.",
                    "RAID 6 verwendet keine Paritätsprüfung.",
                    "RAID 6 ist schneller als RAID 5 bei Schreiboperationen.",
                    "RAID 6 benötigt weniger Speicherplatz als RAID 5."
                ],
                correct: ["RAID 6 kann zwei Festplattenausfälle verkraften."],
                explanation: "RAID 6 fügt eine zweite Parität hinzu, was es ermöglicht, den Ausfall von zwei Festplatten zu verkraften, im Gegensatz zu RAID 5, das nur einen Festplattenausfall übersteht."
            },
            {
                question: "11. Was beschreibt das RAID-Dreieck?",
                answers: [
                    "Es beschreibt die Beziehung zwischen RAID-Performance, Speicherplatz und Datensicherheit.",
                    "Es ist ein spezifisches Dateisystem für RAID-Systeme.",
                    "Es erhöht die Schreibgeschwindigkeit von Festplatten.",
                    "Es verringert die Netzwerkgeschwindigkeit."
                ],
                correct: ["Es beschreibt die Beziehung zwischen RAID-Performance, Speicherplatz und Datensicherheit."],
                explanation: "Das RAID-Dreieck beschreibt die Balance zwischen Leistung, Speicherkapazität und Datensicherheit in RAID-Systemen."
            },
            {
                question: "12. Wie wird die Parität in RAID 5 berechnet?",
                answers: [
                    "Mit Hilfe des XOR-Operators.",
                    "Durch das Spiegeln der Daten.",
                    "Durch das Komprimieren der Daten.",
                    "Durch die Aufteilung in Blöcke."
                ],
                correct: ["Mit Hilfe des XOR-Operators."],
                explanation: "RAID 5 verwendet den XOR-Operator, um die Paritätsinformationen zur Fehlerkorrektur zu berechnen."
            },
            {
                question: "14. Was beschreibt die Schicht 3 (Vermittlungsschicht <Network Layer>) im OSI-Modell?",
                answers: [
                    "Sie ist für das Routing von Datenpaketen verantwortlich.",
                    "Sie übersetzt die Daten in ein lesbares Format.",
                    "Sie verwaltet Sitzungen zwischen Geräten.",
                    "Sie steuert den Zugriff auf physische Netzwerke."
                ],
                correct: ["Sie ist für das Routing von Datenpaketen verantwortlich."],
                explanation: "Die Vermittlungsschicht <Network Layer> (Schicht 3) ist verantwortlich für das Routing von Datenpaketen über verschiedene Netzwerke."
            },
            {
                question: "15. Welche Funktion erfüllt die Root-Bridge im Spanning-Tree-Algorithmus?",
                answers: [
                    "Sie eliminiert redundante Pfade und Schleifen im Netzwerk.",
                    "Sie speichert alle MAC-Adressen im Netzwerk.",
                    "Sie sendet alle Datenpakete an das Standard-Gateway.",
                    "Sie synchronisiert die Uhrzeit im Netzwerk."
                ],
                correct: ["Sie eliminiert redundante Pfade und Schleifen im Netzwerk."],
                explanation: "Die Root-Bridge im Spanning-Tree-Algorithmus sorgt dafür, dass keine redundanten Pfade existieren und das Netzwerk loop-frei ist."
            },
            {
                question: "16. Was ist das Prinzip von Cut-Through-Switching?",
                answers: [
                    "Pakete werden direkt nach Empfang der Zieladresse weitergeleitet.",
                    "Pakete werden vollständig empfangen und auf Fehler überprüft.",
                    "Pakete werden fragmentiert, um die Übertragung zu beschleunigen.",
                    "Pakete werden komprimiert, um Bandbreite zu sparen."
                ],
                correct: ["Pakete werden direkt nach Empfang der Zieladresse weitergeleitet."],
                explanation: "Cut-Through-Switching minimiert Latenzen, indem Pakete sofort nach Empfang der Zieladresse weitergeleitet werden."
            },
            {
                question: "17. Was ist das OSI-Modell?",
                answers: [
                    "Ein Modell zur Festlegung von Netzwerkkabeln",
                    "Ein 7-Schicht-Modell für Datenkommunikation",
                    "Ein Modell zur Speicherung von Daten",
                    "Ein 4-Schicht-Modell für Netzwerkkontrollen"
                ],
                correct: ["Ein 7-Schicht-Modell für Datenkommunikation"],
                explanation: "Das OSI-Modell ist ein 7-Schicht-Modell, das zur Standardisierung der Kommunikation zwischen verschiedenen Netzwerksystemen dient."
            },
            {
                question: "18. Welche Schichten des OSI-Modells sind für Transportfunktionen zuständig?",
                answers: [
                    "Schicht 1 bis 7",
                    "Schicht 1 bis 4",
                    "Schicht 5 bis 7",
                    "Nur Schicht 7"
                ],
                correct: ["Schicht 1 bis 4"],
                explanation: "Die Schichten 1 bis 4 des OSI-Modells sind für die Transportfunktionen verantwortlich."
            },
            {
                question: "19. Was ist die Aufgabe der Anwendungsschicht (Schicht 7) im OSI-Modell?",
                answers: [
                    "Sie steuert die physischen Datenübertragungen",
                    "Sie sorgt für die Fehlererkennung",
                    "Sie stellt eine Schnittstelle zum Anwenderprogramm bereit",
                    "Sie wählt die optimale Route für Datenpakete"
                ],
                correct: ["Sie stellt eine Schnittstelle zum Anwenderprogramm bereit"],
                explanation: "Die Anwendungsschicht (Schicht 7) stellt Dienste für die Anwendungen bereit, wie den Dateizugriff und die Kommunikation über das Netzwerk."
            },
            {
                question: "20. Welche Aufgabe übernimmt die Darstellungs-Schicht <Presentation Layer> (Schicht 6)?",
                answers: [
                    "Codierung und Decodierung der Daten",
                    "Steuerung des Datenflusses",
                    "Transport der Datenpakete",
                    "Fehlerkorrektur"
                ],
                correct: ["Codierung und Decodierung der Daten"],
                explanation: "Die Darstellungs-Schicht <Presentation Layer> (Schicht 6) kümmert sich um die Codierung/Decodierung und Formatierung der Daten, um eine einheitliche Darstellung zu gewährleisten z.B:(ASCII, EBCDIC."
            },
            {
                question: "21. Welche Funktion hat die Sitzungsschicht <Session Layer>(Schicht 5)?",
                answers: [
                    "Steuert den Aufbau und die Beendigung der Verbindung",
                    "Verschlüsselt die Daten",
                    "Legt physikalische Übertragungsparameter fest",
                    "Stellt eine Schnittstelle zum Anwenderprogramm bereit"
                ],
                correct: ["Steuert den Aufbau und die Beendigung der Verbindung"],
                explanation: "Die Sitzungsschicht <Session Layer> (Schicht 5) sorgt für den kontrollierten Aufbau, die Durchführung und die Beendigung von Kommunikationsverbindungen."
            },
            {
                question: "22. Welche Aufgabe hat die Transportschicht <Transport Layer> (Schicht 4)?",
                answers: [
                    "Transportiert die Daten zwischen zwei Partnern",
                    "Legt das Format der Daten fest",
                    "Steuert die Verschlüsselung der Daten",
                    "Verwaltet Benutzerzugriffsrechte"
                ],
                correct: ["Transportiert die Daten zwischen zwei Partnern"],
                explanation: "Die Transportschicht <Transport Layer> (Schicht 4) stellt sicher, dass Daten korrekt und vollständig zwischen Sender und Empfänger transportiert werden."
            },
            {
                question: "23. Was ist die Hauptaufgabe der Vermittlungsschicht <Network Layer> (Schicht 3)?",
                answers: [
                    "Fehlererkennung und -korrektur",
                    "Auswahl der Datenwege (Routing)",
                    "Bereitstellung der Schnittstelle zur Anwendung",
                    "Steuerung des physikalischen Datenzugriffs"
                ],
                correct: ["Auswahl der Datenwege (Routing)"],
                explanation: "Die Vermittlungsschicht <Network Layer> (Schicht 3) kümmert sich um das Routing, also die Auswahl der besten Pfade für Datenpakete im Netzwerk."
            },
            {
                question: "24. Welche Funktion hat die Sicherungsschicht <Data link Layer> (Schicht 2)?",
                answers: [
                    "Bereitstellung von Dateizugriffsrechten",
                    "Fehlererkennung und -korrektur für Datenrahmen",
                    "Transport von Datenpaketen",
                    "Codierung der Daten in ASCII oder EBCDIC"
                ],
                correct: ["Fehlererkennung und -korrektur für Datenrahmen"],
                explanation: "Die Sicherungsschicht <Data Link Layer> (Schicht 2) sorgt für die korrekte Übertragung der Datenrahmen und behebt Übertragungsfehler."
            },
            {
                question: "25. Was macht die Bitübertragungsschicht <Physical Layer> (Schicht 1)?",
                answers: [
                    "Sie definiert elektrische und mechanische Übertragungsstandards",
                    "Sie sorgt für die Benutzerverwaltung",
                    "Sie wählt die Datenpaket-Routen",
                    "Sie steuert die Datencodierung in ASCII oder EBCDIC"
                ],
                correct: ["Sie definiert elektrische und mechanische Übertragungsstandards"],
                explanation: "Die Bitübertragungsschicht <Physical Layer>(Schicht 1) legt die physikalischen Parameter fest, wie die Übertragungsrate und die Art der Verbindung."
            },
            {
                question: "26. Was ist der Unterschied zwischen paketvermittelten und leitungsvermittelten Netzen?",
                answers: [
                    "In paketvermittelten Netzen wird eine feste Leitung zugewiesen",
                    "In leitungsvermittelten Netzen wird eine Verbindung nur bei Bedarf aufgebaut",
                    "Paketvermittelte Netze verwenden Zwischenspeicher, leitungsvermittelte nicht",
                    "In leitungsvermittelten Netzen wird eine feste Verbindung für die Dauer des Datenaustauschs reserviert"
                ],
                correct: ["In leitungsvermittelten Netzen wird eine feste Verbindung für die Dauer des Datenaustauschs reserviert"],
                explanation: "In leitungsvermittelten Netzen bleibt die Verbindung während der gesamten Kommunikation bestehen, während paketvermittelte Netze die Daten in Paketen weiterleiten, ohne eine feste Verbindung."
            },
            {
                question: "27. Auf welcher OSI-Schicht arbeitet ein Hub?",
                answers: [
                    "Layer 1",
                    "Layer 2",
                    "Layer 3",
                    "Layer 4"
                ],
                correct: ["Layer 1"],
                explanation: "Ein Hub arbeitet auf der physikalischen Schicht (Layer 1) und erweitert die physikalische Größe des Netzwerks, ohne die Daten zu verändern."
            },
            {
                question: "28. Welche Funktion hat ein Switch im Netzwerk?",
                answers: [
                    "Er sendet Daten an alle Netzwerkgeräte",
                    "Er verbindet Netzwerksegmente und leitet Daten nur an den Zielanschluss weiter",
                    "Er leitet Datenpakete auf Grundlage von IP-Adressen weiter",
                    "Er arbeitet auf Layer 3 des OSI-Modells"
                ],
                correct: ["Er verbindet Netzwerksegmente und leitet Daten nur an den Zielanschluss weiter"],
                explanation: "Ein Switch arbeitet auf Layer 2 und leitet Datenframes gezielt an den Anschluss weiter, für den sie bestimmt sind, wodurch die Netzwerkgeschwindigkeit erhöht wird."
            },
            {
                question: "29. Was ist eine Kollisionsdomäne?",
                answers: [
                    "Ein Bereich, in dem keine Kollisionen auftreten können",
                    "Ein Netzwerksegment, in dem Knoten gleichzeitig senden und Kollisionen auftreten können",
                    "Eine Domäne, die den Broadcast-Verkehr im Netzwerk steuert",
                    "Ein logischer Bereich zur Speicherung von Netzwerkdaten"
                ],
                correct: ["Ein Netzwerksegment, in dem Knoten gleichzeitig senden und Kollisionen auftreten können"],
                explanation: "In einer Kollisionsdomäne können Knoten im Netzwerk gleichzeitig senden, was zu Datenkollisionen führt."
            },
            {
                question: "30. Wie kann die Anzahl der Kollisionsdomänen im Netzwerk reduziert werden?",
                answers: [
                    "Durch den Einsatz von Routern",
                    "Durch den Einsatz von Hubs",
                    "Durch den Einsatz von Switches",
                    "Durch die Nutzung von Firewalls"
                ],
                correct: ["Durch den Einsatz von Switches"],
                explanation: "Switches trennen Kollisionsdomänen, indem sie separate Datenwege für verschiedene Segmente bereitstellen."
            },
            {
                question: "31. Welche Funktion hat ein Router im OSI-Modell?",
                answers: [
                    "Er arbeitet auf Layer 2 und leitet Frames weiter",
                    "Er arbeitet auf Layer 3 und leitet Pakete anhand der Zieladresse weiter",
                    "Er speichert Netzwerkdaten auf Layer 4",
                    "Er verbindet Geräte auf Layer 1"
                ],
                correct: ["Er arbeitet auf Layer 3 und leitet Pakete anhand der Zieladresse weiter"],
                explanation: "Ein Router arbeitet auf Layer 3 Vermittlungsschicht <Network Layer> und bestimmt den besten Weg für ein Datenpaket basierend auf dessen Ziel-IP-Adresse."
            },
            {
                question: "32. Welche Faktoren können die Wahl einer Route beeinflussen?",
                answers: [
                    "Die Verbindungsart, Verbindungskosten und Zieladresse",
                    "Die MAC-Adresse des Empfängers",
                    "Nur die Verbindungskosten",
                    "Die Geschwindigkeit des Hubs"
                ],
                correct: ["Die Verbindungsart, Verbindungskosten und Zieladresse"],
                explanation: "Kriterien wie Verbindungskosten, Bandbreite und Zieladresse beeinflussen die Wahl der Route im Netzwerk."
            },
            {
                question: "33. Was macht ein IP-Routing-Algorithmus?",
                answers: [
                    "Er wandelt IP-Adressen in MAC-Adressen um",
                    "Er prüft, ob das Datenpaket lokal oder weiterzuleiten ist",
                    "Er teilt Frames in kleinere Pakete auf",
                    "Er synchronisiert die Zeit zwischen Routern"
                ],
                correct: ["Er prüft, ob das Datenpaket lokal oder weiterzuleiten ist"],
                explanation: "Der IP-Routing-Algorithmus überprüft, ob ein Datenpaket lokal verarbeitet oder an ein anderes Netzwerk weitergeleitet werden soll."
            },
            {
                question: "34. Was passiert mit einem Datenpaket, wenn keine Route bekannt ist und kein Standard-Gateway existiert?",
                answers: [
                    "Das Datenpaket wird zum nächsten Router weitergeleitet",
                    "Das Datenpaket wird verworfen und es erfolgt eine Fehlermeldung",
                    "Das Datenpaket wird im Netzwerk gespeichert",
                    "Das Datenpaket wird automatisch an den Absender zurückgeschickt"
                ],
                correct: ["Das Datenpaket wird verworfen und es erfolgt eine Fehlermeldung"],
                explanation: "Ohne eine bekannte Route oder ein Standard-Gateway kann das Datenpaket nicht weitergeleitet werden und wird verworfen."
            },
            {
                question: "35. Was enthält eine Routing-Tabelle?",
                answers: [
                    "Nur die Ziel-IP-Adressen",
                    "Nur statische Routen",
                    "Alle bekannten Netzwerkadressen und Verbindungskosten",
                    "Nur die Daten der Kollisionsdomänen"
                ],
                correct: ["Alle bekannten Netzwerkadressen und Verbindungskosten"],
                explanation: "Eine Routing-Tabelle enthält Informationen zu bekannten Netzwerkadressen, Routen, Verbindungskosten und weiteren Wegbeschreibungen."
            },
            {
                question: "36. Was ist der Unterschied zwischen statischem und dynamischem Routing?",
                answers: [
                    "Statisches Routing aktualisiert die Routing-Tabelle automatisch",
                    "Dynamisches Routing erfordert manuelle Aktualisierungen",
                    "Statisches Routing erfordert manuelle Pflege der Routing-Tabelle, dynamisches Routing passt die Tabelle automatisch an",
                    "Es gibt keinen Unterschied"
                ],
                correct: ["Statisches Routing erfordert manuelle Pflege der Routing-Tabelle, dynamisches Routing passt die Tabelle automatisch an"],
                explanation: "Beim statischen Routing müssen die Routen manuell gepflegt werden, während dynamisches Routing die Tabelle automatisch an Veränderungen im Netzwerk anpasst."
            },
            {
                question: "37. Wie funktioniert ein Hub im Netzwerk?",
                answers: [
                    "Er sendet eingehende Daten an alle angeschlossenen Geräte",
                    "Er speichert Daten und sendet sie an den gewünschten Empfänger",
                    "Er blockiert Datenpakete zur Kollisionsvermeidung",
                    "Er verschlüsselt alle übertragenen Daten"
                ],
                correct: ["Er sendet eingehende Daten an alle angeschlossenen Geräte"],
                explanation: "Ein Hub arbeitet als Repeater auf Layer 1 und sendet eingehende Daten an alle angeschlossenen Geräte, unabhängig vom Empfänger."
            },
            {
                question: "38. Was ist eine Broadcastdomäne?",
                answers: [
                    "Ein Bereich, in dem Daten an alle Geräte gesendet werden",
                    "Ein Bereich ohne Kollisionen",
                    "Ein geschlossener Netzwerkbereich ohne Router",
                    "Ein Bereich, der nur Switche enthält"
                ],
                correct: ["Ein Bereich, in dem Daten an alle Geräte gesendet werden"],
                explanation: "In einer Broadcastdomäne werden Datenpakete an alle Geräte innerhalb des Netzwerkbereichs gesendet."
            },
            {
                question: "39. Warum wird das IP-Protokoll als 'routingfähig' bezeichnet?",
                answers: [
                    "Weil es den Transport auf der Bitübertragungsschicht unterstützt",
                    "Weil es Daten über verschiedene physikalische Netzwerke weiterleiten kann",
                    "Weil es nur in LANs verwendet wird",
                    "Weil es ausschließlich innerhalb eines lokalen Netzwerks funktioniert"
                ],
                correct: ["Weil es Daten über verschiedene physikalische Netzwerke weiterleiten kann"],
                explanation: "Das IP-Protokoll ist in der Lage, Datenpakete über verschiedene Netzwerke und Übertragungswege zu transportieren, wodurch es routingfähig ist."
            },
            {
                question: "40. Was macht das Standard-Gateway beim Routing?",
                answers: [
                    "Es leitet Datenpakete an alle Netzwerksegmente weiter",
                    "Es dient als allgemeiner Ausgangspunkt für Datenpakete, deren Route nicht bekannt ist",
                    "Es speichert alle Routing-Tabellen",
                    "Es überprüft die MAC-Adressen der Pakete"
                ],
                correct: ["Es dient als allgemeiner Ausgangspunkt für Datenpakete, deren Route nicht bekannt ist"],
                explanation: "Ein Standard-Gateway ist ein Router, der als Ausgangspunkt für Datenpakete dient, wenn keine spezifische Route bekannt ist."
            },
            {
                question: "41. Was versteht man unter der Wegfindung (Routing) in Netzwerken?",
                answers: [
                    "Die direkte Übertragung von Datenpaketen ohne Routing-Tabelle",
                    "Die Bestimmung des optimalen Pfads für Datenpakete basierend auf mehreren Kriterien",
                    "Die Verschlüsselung von Datenpaketen vor dem Versand",
                    "Die Adressauflösung von MAC-Adressen"
                ],
                correct: ["Die Bestimmung des optimalen Pfads für Datenpakete basierend auf mehreren Kriterien"],
                explanation: "Routing ist die Wegfindung für Datenpakete in einem Netzwerk, wobei Kriterien wie Verbindungskosten und Bandbreite berücksichtigt werden."
            },
            {
                question: "42. Welche Arten von Informationen kann eine Routing-Tabelle enthalten?",
                answers: [
                    "Nur Ziel-IP-Adressen",
                    "Nur statische Verbindungen",
                    "Verbindungsarten, bekannte Netzwerkadressen und Verbindungskosten",
                    "Nur die Adressen von Endgeräten"
                ],
                correct: ["Verbindungsarten, bekannte Netzwerkadressen und Verbindungskosten"],
                explanation: "Eine Routing-Tabelle enthält umfassende Informationen, z. B. Netzwerkadressen, Verbindungsarten und -kosten, um den optimalen Pfad zu bestimmen."
            },
            {
                question: "43. Wie unterscheidet sich ein Switch von einem Router hinsichtlich der Weiterleitung?",
                answers: [
                    "Ein Switch arbeitet auf Layer 3 und ein Router auf Layer 2",
                    "Ein Switch leitet Frames basierend auf MAC-Adressen weiter, ein Router leitet Pakete basierend auf IP-Adressen weiter",
                    "Ein Router leitet nur Daten innerhalb eines lokalen Netzwerks weiter",
                    "Ein Switch leitet Daten zufällig an alle Geräte"
                ],
                correct: ["Ein Switch leitet Frames basierend auf MAC-Adressen weiter, ein Router leitet Pakete basierend auf IP-Adressen weiter"],
                explanation: "Ein Switch verwendet MAC-Adressen zur Weiterleitung auf Layer 2, während ein Router auf Layer 3 anhand von IP-Adressen arbeitet."
            },
            {
                question: "44. Auf welcher OSI-Schicht arbeitet ein Hub?",
                answers: [
                    "Layer 1",
                    "Layer 2",
                    "Layer 3",
                    "Layer 4"
                ],
                correct: ["Layer 1"],
                explanation: "Ein Hub arbeitet auf der physikalischen Schicht (Layer 1) und erweitert die physikalische Größe des Netzwerks, ohne die Daten zu verändern."
            },
            {
                question: "45. Welche Funktion hat ein Switch im Netzwerk?",
                answers: [
                    "Er sendet Daten an alle Netzwerkgeräte",
                    "Er verbindet Netzwerksegmente und leitet Daten nur an den Zielanschluss weiter",
                    "Er leitet Datenpakete auf Grundlage von IP-Adressen weiter",
                    "Er arbeitet auf Layer 3 des OSI-Modells"
                ],
                correct: ["Er verbindet Netzwerksegmente und leitet Daten nur an den Zielanschluss weiter"],
                explanation: "Ein Switch arbeitet auf Layer 2 und leitet Datenframes gezielt an den Anschluss weiter, für den sie bestimmt sind, wodurch die Netzwerkgeschwindigkeit erhöht wird."
            },
            {
                question: "46. Was ist eine Kollisionsdomäne?",
                answers: [
                    "Ein Bereich, in dem keine Kollisionen auftreten können",
                    "Ein Netzwerksegment, in dem Knoten gleichzeitig senden und Kollisionen auftreten können",
                    "Eine Domäne, die den Broadcast-Verkehr im Netzwerk steuert",
                    "Ein logischer Bereich zur Speicherung von Netzwerkdaten"
                ],
                correct: ["Ein Netzwerksegment, in dem Knoten gleichzeitig senden und Kollisionen auftreten können"],
                explanation: "In einer Kollisionsdomäne können Knoten im Netzwerk gleichzeitig senden, was zu Datenkollisionen führt."
            },
            {
                question: "47. Wie kann die Anzahl der Kollisionsdomänen im Netzwerk reduziert werden?",
                answers: [
                    "Durch den Einsatz von Routern",
                    "Durch den Einsatz von Hubs",
                    "Durch den Einsatz von Switches",
                    "Durch die Nutzung von Firewalls"
                ],
                correct: ["Durch den Einsatz von Switches"],
                explanation: "Switches trennen Kollisionsdomänen, indem sie separate Datenwege für verschiedene Segmente bereitstellen."
            },
            {
                question: "48. Welche Funktion hat ein Router im OSI-Modell?",
                answers: [
                    "Er arbeitet auf Layer 2 und leitet Frames weiter",
                    "Er arbeitet auf Layer 3 und leitet Pakete anhand der Zieladresse weiter",
                    "Er speichert Netzwerkdaten auf Layer 4",
                    "Er verbindet Geräte auf Layer 1"
                ],
                correct: ["Er arbeitet auf Layer 3 und leitet Pakete anhand der Zieladresse weiter"],
                explanation: "Ein Router arbeitet auf Layer 3 und bestimmt den besten Weg für ein Datenpaket basierend auf dessen Ziel-IP-Adresse."
            },
            {
                question: "49. Welche Faktoren können die Wahl einer Route beeinflussen?",
                answers: [
                    "Die Verbindungsart, Verbindungskosten und Zieladresse",
                    "Die MAC-Adresse des Empfängers",
                    "Nur die Verbindungskosten",
                    "Die Geschwindigkeit des Hubs"
                ],
                correct: ["Die Verbindungsart, Verbindungskosten und Zieladresse"],
                explanation: "Kriterien wie Verbindungskosten, Bandbreite und Zieladresse beeinflussen die Wahl der Route im Netzwerk."
            },
            {
                question: "50. Was macht ein IP-Routing-Algorithmus?",
                answers: [
                    "Er wandelt IP-Adressen in MAC-Adressen um",
                    "Er prüft, ob das Datenpaket lokal oder weiterzuleiten ist",
                    "Er teilt Frames in kleinere Pakete auf",
                    "Er synchronisiert die Zeit zwischen Routern"
                ],
                correct: ["Er prüft, ob das Datenpaket lokal oder weiterzuleiten ist"],
                explanation: "Der IP-Routing-Algorithmus überprüft, ob ein Datenpaket lokal verarbeitet oder an ein anderes Netzwerk weitergeleitet werden soll."
            },
            {
                question: "51. Was passiert mit einem Datenpaket, wenn keine Route bekannt ist und kein Standard-Gateway existiert?",
                answers: [
                    "Das Datenpaket wird zum nächsten Router weitergeleitet",
                    "Das Datenpaket wird verworfen und es erfolgt eine Fehlermeldung",
                    "Das Datenpaket wird im Netzwerk gespeichert",
                    "Das Datenpaket wird automatisch an den Absender zurückgeschickt"
                ],
                correct: ["Das Datenpaket wird verworfen und es erfolgt eine Fehlermeldung"],
                explanation: "Ohne eine bekannte Route oder ein Standard-Gateway kann das Datenpaket nicht weitergeleitet werden und wird verworfen."
            },
            {
                question: "52. Was enthält eine Routing-Tabelle?",
                answers: [
                    "Nur die Ziel-IP-Adressen",
                    "Nur statische Routen",
                    "Alle bekannten Netzwerkadressen und Verbindungskosten",
                    "Nur die Daten der Kollisionsdomänen"
                ],
                correct: ["Alle bekannten Netzwerkadressen und Verbindungskosten"],
                explanation: "Eine Routing-Tabelle enthält Informationen zu bekannten Netzwerkadressen, Routen, Verbindungskosten und weiteren Wegbeschreibungen."
            },
            {
                question: "53. Was ist der Unterschied zwischen statischem und dynamischem Routing?",
                answers: [
                    "Statisches Routing aktualisiert die Routing-Tabelle automatisch",
                    "Dynamisches Routing erfordert manuelle Aktualisierungen",
                    "Statisches Routing erfordert manuelle Pflege der Routing-Tabelle, dynamisches Routing passt die Tabelle automatisch an",
                    "Es gibt keinen Unterschied"
                ],
                correct: ["Statisches Routing erfordert manuelle Pflege der Routing-Tabelle, dynamisches Routing passt die Tabelle automatisch an"],
                explanation: "Beim statischen Routing müssen die Routen manuell gepflegt werden, während dynamisches Routing die Tabelle automatisch an Veränderungen im Netzwerk anpasst."
            },
            {
                question: "54. Wie funktioniert ein Hub im Netzwerk?",
                answers: [
                    "Er sendet eingehende Daten an alle angeschlossenen Geräte",
                    "Er speichert Daten und sendet sie an den gewünschten Empfänger",
                    "Er blockiert Datenpakete zur Kollisionsvermeidung",
                    "Er verschlüsselt alle übertragenen Daten"
                ],
                correct: ["Er sendet eingehende Daten an alle angeschlossenen Geräte"],
                explanation: "Ein Hub arbeitet als Repeater auf Layer 1 und sendet eingehende Daten an alle angeschlossenen Geräte, unabhängig vom Empfänger."
            },
            {
                question: "56. Warum wird das IP-Protokoll als 'routingfähig' bezeichnet?",
                answers: [
                    "Weil es den Transport auf der Bitübertragungsschicht unterstützt",
                    "Weil es Daten über verschiedene physikalische Netzwerke weiterleiten kann",
                    "Weil es nur in LANs verwendet wird",
                    "Weil es ausschließlich innerhalb eines lokalen Netzwerks funktioniert"
                ],
                correct: ["Weil es Daten über verschiedene physikalische Netzwerke weiterleiten kann"],
                explanation: "Das IP-Protokoll ist in der Lage, Datenpakete über verschiedene Netzwerke und Übertragungswege zu transportieren, wodurch es routingfähig ist."
            },
            {
                question: "57. Was macht das Standard-Gateway beim Routing?",
                answers: [
                    "Es leitet Datenpakete an alle Netzwerksegmente weiter",
                    "Es dient als allgemeiner Ausgangspunkt für Datenpakete, deren Route nicht bekannt ist",
                    "Es speichert alle Routing-Tabellen",
                    "Es überprüft die MAC-Adressen der Pakete"
                ],
                correct: ["Es dient als allgemeiner Ausgangspunkt für Datenpakete, deren Route nicht bekannt ist"],
                explanation: "Ein Standard-Gateway ist ein Router, der als Ausgangspunkt für Datenpakete dient, wenn keine spezifische Route bekannt ist."
            },
            {
                question: "58. Was versteht man unter der Wegfindung (Routing) in Netzwerken?",
                answers: [
                    "Die direkte Übertragung von Datenpaketen ohne Routing-Tabelle",
                    "Die Bestimmung des optimalen Pfads für Datenpakete basierend auf mehreren Kriterien",
                    "Die Verschlüsselung von Datenpaketen vor dem Versand",
                    "Die Adressauflösung von MAC-Adressen"
                ],
                correct: ["Die Bestimmung des optimalen Pfads für Datenpakete basierend auf mehreren Kriterien"],
                explanation: "Routing ist die Wegfindung für Datenpakete in einem Netzwerk, wobei Kriterien wie Verbindungskosten und Bandbreite berücksichtigt werden."
            },
            {
                question: "59. Welche Arten von Informationen kann eine Routing-Tabelle enthalten?",
                answers: [
                    "Nur Ziel-IP-Adressen",
                    "Nur statische Verbindungen",
                    "Verbindungsarten, bekannte Netzwerkadressen und Verbindungskosten",
                    "Nur die Adressen von Endgeräten"
                ],
                correct: ["Verbindungsarten, bekannte Netzwerkadressen und Verbindungskosten"],
                explanation: "Eine Routing-Tabelle enthält umfassende Informationen, z. B. Netzwerkadressen, Verbindungsarten und -kosten, um den optimalen Pfad zu bestimmen."
            },
            {
                question: "60. Wie unterscheidet sich ein Switch von einem Router hinsichtlich der Weiterleitung?",
                answers: [
                    "Ein Switch arbeitet auf Layer 3 und ein Router auf Layer 2",
                    "Ein Switch leitet Frames basierend auf MAC-Adressen weiter, ein Router leitet Pakete basierend auf IP-Adressen weiter",
                    "Ein Router leitet nur Daten innerhalb eines lokalen Netzwerks weiter",
                    "Ein Switch leitet Daten zufällig an alle Geräte"
                ],
                correct: ["Ein Switch leitet Frames basierend auf MAC-Adressen weiter, ein Router leitet Pakete basierend auf IP-Adressen weiter"],
                explanation: "Ein Switch verwendet MAC-Adressen zur Weiterleitung auf Layer 2, während ein Router auf Layer 3 anhand von IP-Adressen arbeitet."
            },
            {
                question: "61. Welche Hauptaufgabe hat ein Hub in einem Ethernet-Netzwerk?",
                answers: [
                    "Er trennt Kollisionsdomänen",
                    "Er verstärkt das Signal und verteilt es an alle angeschlossenen Geräte",
                    "Er filtert Datenpakete basierend auf IP-Adressen",
                    "Er überprüft Datenpakete auf Fehler und speichert sie"
                ],
                correct: ["Er verstärkt das Signal und verteilt es an alle angeschlossenen Geräte"],
                explanation: "Ein Hub arbeitet als Signalverstärker und verteilt eingehende Signale an alle angeschlossenen Geräte, ohne sie zu filtern."
            },
            {
                question: "62. Welche Funktion hat ein Uplink-Port bei einem Hub?",
                answers: [
                    "Er dient zur Verbindung mehrerer Hubs",
                    "Er erhöht die Übertragungsrate",
                    "Er trennt Broadcast-Domänen",
                    "Er filtert unbenutzte Ports"
                ],
                correct: ["Er dient zur Verbindung mehrerer Hubs"],
                explanation: "Ein Uplink-Port ermöglicht das Kaskadieren mehrerer Hubs, wodurch sie verbunden und die Reichweite erweitert werden kann."
            },
            {
                question: "63. Was ist die Hauptaufgabe einer Bridge im Netzwerk?",
                answers: [
                    "Sie verbindet verschiedene IP-Subnetze",
                    "Sie trennt physikalisch zwei Ethernet-LANs und verhindert Kollisionen",
                    "Sie leitet Pakete basierend auf MAC-Adressen weiter",
                    "Sie verstärkt Signale für eine größere Reichweite"
                ],
                correct: ["Sie trennt physikalisch zwei Ethernet-LANs und verhindert Kollisionen"],
                explanation: "Eine Bridge trennt physikalisch zwei LANs und isoliert Kollisionen und fehlerhafte Pakete zwischen den Netzwerken."
            },
            {
                question: "64. Was ist der Spanning Tree Algorithmus?",
                answers: [
                    "Ein Algorithmus zur Optimierung der Routingtabellen",
                    "Ein Algorithmus zur Vermeidung von Schleifen in Netzwerk-Topologien",
                    "Ein Algorithmus zur MAC-Adressfilterung",
                    "Ein Algorithmus zur DNS-Auflösung"
                ],
                correct: ["Ein Algorithmus zur Vermeidung von Schleifen in Netzwerk-Topologien"],
                explanation: "Der Spanning Tree Algorithmus verhindert Schleifen, indem er redundante Pfade im Netzwerk eliminiert und eine baumartige Struktur erstellt."
            },
            {
                question: "65. Welche Daten werden von Bridges zur Kommunikation verwendet?",
                answers: [
                    "Bridge Information Units (BIUs)",
                    "Bridge Protocol Data Units (BPDUs)",
                    "Packet Switching Units (PSUs)",
                    "Segment Transfer Units (STUs)"
                ],
                correct: ["Bridge Protocol Data Units (BPDUs)"],
                explanation: "Bridges nutzen BPDUs (Bridge Protocol Data Units), um sich gegenseitig zu erkennen und den Spanning Tree Algorithmus zu koordinieren."
            },
            {
                question: "66. Welche Bedeutung hat die Root-Bridge in einem Netzwerk?",
                answers: [
                    "Sie stellt den Ausgangspunkt für den Datenverkehr dar",
                    "Sie sorgt für die Trennung aller Broadcast-Domänen",
                    "Sie dient als Bezugspunkt für den Spanning Tree Algorithmus",
                    "Sie speichert IP-Adressinformationen für alle Netzwerkknoten"
                ],
                correct: ["Sie dient als Bezugspunkt für den Spanning Tree Algorithmus"],
                explanation: "Die Root-Bridge ist die zentrale Referenz, von der aus der Spanning Tree Algorithmus die besten Pfade berechnet."
            },
            {
                question: "67. Worin besteht der Vorteil eines Switches gegenüber einer Bridge?",
                answers: [
                    "Switches verbinden nur zwei Netzwerksegmente",
                    "Switches bieten dedizierte Verbindungen und verteilen die Bandbreite auf Netzsegmente",
                    "Switches arbeiten auf Layer 3 des OSI-Modells",
                    "Switches filtern nur unbenutzte Ports"
                ],
                correct: ["Switches bieten dedizierte Verbindungen und verteilen die Bandbreite auf Netzsegmente"],
                explanation: "Switches verteilen die Bandbreite effizienter und bieten dedizierte Verbindungen zwischen Ports, was die Netzwerkleistung erhöht."
            },
            {
                question: "68. Was bedeutet 'Cut-Through' im Zusammenhang mit Switches?",
                answers: [
                    "Pakete werden direkt weitergeleitet, nachdem die Ziel-MAC-Adresse gelesen wurde",
                    "Pakete werden zwischengespeichert und auf Fehler geprüft",
                    "Nur vollständige Pakete werden weitergeleitet",
                    "Pakete werden nur bei Leerlauf weitergeleitet"
                ],
                correct: ["Pakete werden direkt weitergeleitet, nachdem die Ziel-MAC-Adresse gelesen wurde"],
                explanation: "Bei Cut-Through wird das Paket direkt nach dem Lesen der Ziel-MAC-Adresse weitergeleitet, was zu geringeren Verzögerungen führt."
            },
            {
                question: "69. Wann ist Store-and-Forward-Switching vorteilhaft?",
                answers: [
                    "In Netzwerken mit hoher Fehlerrate",
                    "In Netzwerken ohne Broadcasts",
                    "Nur bei drahtlosen Netzwerken",
                    "In kleinen Netzwerken mit wenigen Knoten"
                ],
                correct: ["In Netzwerken mit hoher Fehlerrate"],
                explanation: "Store-and-Forward-Switching überprüft das gesamte Paket auf Fehler, was bei hoher Fehlerrate die Netzwerkleistung verbessern kann."
            },
            {
                question: "70. Was ist das Layer-3-Switching?",
                answers: [
                    "Ein Ansatz, der ausschließlich auf MAC-Adressen basiert",
                    "Eine Kombination aus Layer-2-Switching und Layer-3-Routing",
                    "Ein Switch, der nur IP-Adressen verwendet",
                    "Ein Router-Ersatz für Punkt-zu-Punkt-Verbindungen"
                ],
                correct: ["Eine Kombination aus Layer-2-Switching und Layer-3-Routing"],
                explanation: "Layer-3-Switching kombiniert schnelles Layer-2-Switching mit der Routing-Funktionalität von Layer 3, was besonders in IP-Netzen vorteilhaft ist oder Multifunktions-Switch."
            },
            {
                question: "71. Wie funktioniert ein Layer-3-Switch bei der Weiterleitung von IP-Paketen?",
                answers: [
                    "Er liest nur die Ziel-MAC-Adresse",
                    "Er analysiert das erste IP-Paket und leitet die folgenden basierend auf MAC-Adressen weiter",
                    "Er verwirft alle Pakete ohne IP-Adresse",
                    "Er überträgt Pakete direkt ohne Verarbeitung"
                ],
                correct: ["Er analysiert das erste IP-Paket und leitet die folgenden basierend auf MAC-Adressen weiter"],
                explanation: "Ein Layer-3-Switch analysiert das erste IP-Paket zwischen zwei Stationen und kann danach die Kommunikation auf Basis der MAC-Adresse fortsetzen."
            },
            {
                question: "72. Was passiert bei einer hohen Anzahl an CRC-Fehlern (Cyclic Redundancy Check) in einem Switch?",
                answers: [
                    "Der Switch schaltet automatisch von Cut-Through auf Store-and-Forward um",
                    "Der Switch schaltet automatisch ab",
                    "Der Switch erhöht die Übertragungsrate",
                    "Der Switch ignoriert alle fehlerhaften Pakete"
                ],
                correct: ["Der Switch schaltet automatisch von Cut-Through auf Store-and-Forward um"],
                explanation: "Um Netzwerkprobleme zu vermeiden, schaltet der Switch bei hoher Fehleranzahl von Cut-Through auf Store-and-Forward um."
            },
            {
                question: "73. Wie kann die Kaskadierung von Switches die Netzwerkleistung verbessern?",
                answers: [
                    "Sie reduziert die Anzahl der Routingtabellen",
                    "Sie entlastet Netzsegmente und verteilt den Datenverkehr",
                    "Sie ermöglicht den Anschluss zusätzlicher Hubs",
                    "Sie sorgt dafür, dass die Bandbreite konstant bleibt"
                ],
                correct: ["Sie entlastet Netzsegmente und verteilt den Datenverkehr"],
                explanation: "Die Kaskadierung von Switches erlaubt es, den Datenverkehr besser zu verteilen und Netzsegmente zu entlasten."
            },
            {
                question: "74. Worin liegt ein Nachteil des Cut-Through-Switchings?",
                answers: [
                    "Es speichert keine Datenpakete",
                    "Fehlerhafte Pakete können das Ziel erreichen",
                    "Es wird nur in drahtlosen Netzwerken verwendet",
                    "Es benötigt mehr Energie als Store-and-Forward"
                ],
                correct: ["Fehlerhafte Pakete können das Ziel erreichen"],
                explanation: "Da beim Cut-Through-Switching Pakete sofort weitergeleitet werden, erreichen möglicherweise auch fehlerhafte Pakete das Ziel."
            },
            {
                question: "75. Wann ist ein Wechsel von Cut-Through zu Store-and-Forward-Switching sinnvoll?",
                answers: [
                    "Bei einer niedrigen Netzwerkbelastung",
                    "Bei einer erhöhten Anzahl an Netzwerkfehlern",
                    "Bei der Kaskadierung von Switches",
                    "Nur in drahtlosen Netzwerken"
                ],
                correct: ["Bei einer erhöhten Anzahl an Netzwerkfehlern"],
                explanation: "Store-and-Forward-Switching hilft bei der Reduzierung von Fehlern im Netzwerk, da es die Pakete vollständig prüft, bevor sie weitergeleitet werden."
            },
        ],

    numberSystem:
        [
            {
                question: "1. Was ist das Hexadezimalsystem?",
                answers: [
                    "Ein Zahlensystem mit Basis 10",
                    "Ein Zahlensystem mit Basis 2",
                    "Ein Zahlensystem mit Basis 8",
                    "Ein Zahlensystem mit Basis 16"
                ],
                correct: ["Ein Zahlensystem mit Basis 16"],
                explanation: "Das Hexadezimalsystem basiert auf 16 Symbolen (0-9 und A-F) und wird oft zur Darstellung großer Dualzahlen verwendet."
            },
            {
                question: "2. Wie wird die Zahl 1011100110111110000 im Hexadezimalsystem dargestellt?",
                answers: [
                    "5CDF0",
                    "5BCF0",
                    "5DFA0",
                    "5DAF0"
                ],
                correct: ["5CDF0"],
                explanation: "Die Dualzahl wird gruppiert und in Hexadezimal umgewandelt, wobei 101=5, 1100=C, 1101=D, 1111=F, 0000=0 ergibt."
            },
            {
                question: "3. Was ist das Ergebnis der Modulo-Berechnung 9 mod 2?",
                answers: [
                    "1",
                    "2",
                    "4",
                    "0"
                ],
                correct: ["1"],
                explanation: "Die Division von 9 durch 2 ergibt 4 Rest 1. Das Modulo-Ergebnis ist daher 1."
            },
            {
                question: "4. Wie lautet der Binärwert von 154?",
                answers: [
                    "10011010",
                    "10101010",
                    "10011100",
                    "11001101"
                ],
                correct: ["10011010"],
                explanation: "Durch die Umrechnung von Dezimal 154 in Binär ergibt sich 10011010."
            },
            {
                question: "5. Wie funktioniert die Addition im Dualsystem?",
                answers: [
                    "Addition funktioniert wie im Dezimalsystem, jedoch mit Überträgen bei 1 + 1 = 10",
                    "Es gibt keine Überträge im Dualsystem",
                    "Addition im Dualsystem ist anders als im Dezimalsystem ohne Übereinstimmung",
                    "Addition im Dualsystem erfordert Multiplikation"
                ],
                correct: ["Addition funktioniert wie im Dezimalsystem, jedoch mit Überträgen bei 1 + 1 = 10"],
                explanation: "Wie im Dezimalsystem wird bei der Addition im Dualsystem ein Übertrag gesetzt, z.B. bei 1 + 1 = 10 (binär)."
            },
            {
                question: "6. Was ist das Ergebnis von 11101 (dezimal 29) + 10001 (dezimal 17) im Dualsystem?",
                answers: [
                    "101110",
                    "110110",
                    "111110",
                    "100110"
                ],
                correct: ["110110"],
                explanation: "Durch Addition der Dualzahlen 11101 und 10001 ergibt sich 110110, was im Dezimalwert 46 entspricht."
            },
            {
                question: "7. Was ist der Unterschied zwischen digitalen und analogen Informationen?",
                answers: [
                    "Digital: kontinuierliche Werte, Analog: diskrete Werte",
                    "Digital: diskrete Werte, Analog: kontinuierliche Werte",
                    "Beide sind diskret",
                    "Beide sind kontinuierlich"
                ],
                correct: ["Digital: diskrete Werte, Analog: kontinuierliche Werte"],
                explanation: "Digitale Informationen werden durch diskrete Werte (z.B. 0 und 1) dargestellt, während analoge Informationen durch kontinuierliche physikalische Größen dargestellt werden."
            },
            {
                question: "8. Wie wird die Zahl 5 im unären Zahlensystem dargestellt?",
                answers: ["|||||", "V", "5", "IIIII"],
                correct: ["|||||"],
                explanation: "Im unären System wird die Zahl 5 durch fünf Striche (|||||) dargestellt."
            },
            {
                question: "9. Warum wurde das römische Zahlensystem abgelöst?",
                answers: [
                    "Weil es keine Null hatte",
                    "Weil es nur für kleine Zahlen nutzbar war",
                    "Weil es zu schwer war, die Buchstaben zu merken",
                    "Weil es keine Platzhalter hatte"
                ],
                correct: ["Weil es keine Null hatte"],
                explanation: "Das römische System war unpraktisch für komplexe Berechnungen und enthielt keine Null."
            },
            {
                question: "10. Welche Ziffern werden im Dezimalsystem verwendet?",
                answers: ["0-9", "0-1", "0-15", "0-100"],
                correct: ["0-9"],
                explanation: "Das Dezimalsystem verwendet die Ziffern 0 bis 9 und basiert auf der Basis 10."
            },
            {
                question: "11. Welche Bedeutung hat die Null im Stellenwertsystem?",
                answers: [
                    "Sie dient als Platzhalter für fehlende Werte",
                    "Sie repräsentiert eine negative Zahl",
                    "Sie ist nur für große Zahlen notwendig",
                    "Sie hat keine Bedeutung"
                ],
                correct: ["Sie dient als Platzhalter für fehlende Werte"],
                explanation: "Die Null ist entscheidend, um Größenordnungen korrekt darzustellen und ermöglicht Berechnungen mit großen Zahlen."
            },
            {
                question: "12. Warum ist das Dualsystem für Computer wichtig?",
                answers: [
                    "Weil es Transistoren effizienter nutzen kann",
                    "Weil es einfacher zu verstehen ist",
                    "Weil es komplexere Berechnungen ermöglicht",
                    "Weil es die Basis 10 verwendet"
                ],
                correct: ["Weil es Transistoren effizienter nutzen kann"],
                explanation: "Das Dualsystem wird in Computern verwendet, weil Transistoren nur zwei Zustände (ein/aus) haben, was 0 und 1 entspricht."
            },
            {
                question: "13. Wie viele verschiedene Kombinationen können mit 8 Bits dargestellt werden?",
                answers: ["256", "128", "512", "1024"],
                correct: ["256"],
                explanation: "Ein Byte (8 Bits) kann 2^8 = 256 verschiedene Kombinationen darstellen."
            },
            {
                question: "14. Was ist ein Bit?",
                answers: [
                    "Die kleinste Informationseinheit im binären System",
                    "Ein anderer Name für ein Byte",
                    "Ein großes Datenpaket",
                    "Ein Speicherblock"
                ],
                correct: ["Die kleinste Informationseinheit im binären System"],
                explanation: "Ein Bit ist die kleinste Informationseinheit und kann entweder den Wert 0 oder 1 haben."
            },
            {
                question: "15. Wie lautet der Hexadezimalwert der Dualzahl 10111000?",
                answers: ["B8", "7F", "C3", "A4"],
                correct: ["B8"],
                explanation: "Die Dualzahl 10111000 entspricht B8 im Hexadezimalsystem."
            },
            {
                question: "16. Was war die bedeutendste Errungenschaft des indischen Stellenwertsystems?",
                answers: [
                    "Die Einführung der Multiplikation",
                    "Die Erfindung der Null als Platzhalter",
                    "Das römische Zahlensystem zu ersetzen",
                    "Die Verwendung von Buchstaben als Ziffern"
                ],
                correct: ["Die Erfindung der Null als Platzhalter"],
                explanation: "Das indische Stellenwertsystem führte die Null als Platzhalter ein, was die Grundlage für moderne Mathematik und große Berechnungen bildete."
            },
            {
                question: "17. Was sind LSB (Least Significant Bit) und MSB (Most Significant Bit) in der Informatik?",
                answers: [
                    "Die am wenigsten und am meisten signifikanten Bits in einem Byte",
                    "Ein Dateisystem und eine Speichermethode",
                    "Zwei verschiedene Prozessorkerne",
                    "Speichergrößen in der Informatik"
                ],
                correct: ["Die am wenigsten und am meisten signifikanten Bits in einem Byte"],
                explanation: "LSB (Least Significant Bit) ist das Bit mit dem geringsten Wert (rechts), und MSB (Most Significant Bit) ist das Bit mit dem höchsten Wert (links) in einem Byte."
            },{
                question: "18. Wie wird die Binärzahl 10000011 in Dezimal umgewandelt?",
                answers: [
                    "129",
                    "131",
                    "127",
                    "133"
                ],
                correct: ["131"],
                explanation: "Die Binärzahl 10000011 entspricht im Dezimalsystem der Zahl 131."
            },
            {
                question: "19. Wie lautet die Dezimalumwandlung der Binärzahl 01101011?",
                answers: [
                    "103",
                    "111",
                    "107",
                    "97"
                ],
                correct: ["107"],
                explanation: "Die Binärzahl 01101011 entspricht im Dezimalsystem der Zahl 107."
            },
            {
                question: "20. Welche Dezimalzahl entspricht der Binärzahl 00000011?",
                answers: [
                    "1",
                    "3",
                    "5",
                    "7"
                ],
                correct: ["3"],
                explanation: "Die Binärzahl 00000011 ergibt im Dezimalsystem die Zahl 3."
            },


        ],
    SwitchingAlgebra:
        [
            {
                question: "1. Was ist positive Logik?",
                answers: [
                    "Logische 0 entspricht dem Pegel H und logische 1 dem Pegel L",
                    "Logische 0 entspricht dem Pegel L und logische 1 dem Pegel H",
                    "Logische 0 entspricht dem Pegel +5 V und logische 1 dem Pegel 0 V",
                    "Logische 0 und logische 1 entsprechen denselben Pegeln"
                ],
                correct: ["Logische 0 entspricht dem Pegel L und logische 1 dem Pegel H"],
                explanation: "Bei positiver Logik entspricht logische 0 dem Pegel L (0 V) und logische 1 dem Pegel H (+5 V)."
            },
            {
                question: "2. Was ist negative Logik?",
                answers: [
                    "Logische 0 entspricht dem Pegel L und logische 1 dem Pegel H",
                    "Logische 0 entspricht dem Pegel H und logische 1 dem Pegel L",
                    "Logische 0 entspricht dem Pegel 0 V und logische 1 dem Pegel +5 V",
                    "Logische 0 und logische 1 haben dieselbe Bedeutung"
                ],
                correct: ["Logische 0 entspricht dem Pegel H und logische 1 dem Pegel L"],
                explanation: "Bei negativer Logik entspricht logische 0 dem Pegel H (+5 V) und logische 1 dem Pegel L (0 V)."
            },
            {
                question: "3. Wann ist das Ergebnis eines UND-Gatters 1?",
                answers: [
                    "Wenn alle Eingänge 0 sind",
                    "Wenn ein Eingang 1 und der andere 0 ist",
                    "Wenn beide Eingänge 1 sind",
                    "Wenn ein Eingang 0 ist"
                ],
                correct: ["Wenn beide Eingänge 1 sind"],
                explanation: "Das UND-Gatter liefert nur dann den Wert 1, wenn alle Eingänge auf 1 gesetzt sind."
            },
            {
                question: "4. Wann ist das Ergebnis eines ODER-Gatters 1?",
                answers: [
                    "Wenn beide Eingänge 0 sind",
                    "Wenn mindestens ein Eingang 1 ist",
                    "Wenn alle Eingänge 0 sind",
                    "Wenn beide Eingänge unterschiedlich sind"
                ],
                correct: ["Wenn mindestens ein Eingang 1 ist"],
                explanation: "Das ODER-Gatter gibt 1 aus, wenn mindestens einer der Eingänge auf 1 gesetzt ist."
            },
            {
                question: "5. Wofür wird das XOR-Gatter verwendet?",
                answers: [
                    "Um immer eine 1 auszugeben",
                    "Um Doppelnamen wie Meier Schmitt auszuschließen",
                    "Um beide Eingänge zu negieren",
                    "Um immer eine 0 auszugeben"
                ],
                correct: ["Um Doppelnamen wie Meier Schmitt auszuschließen"],
                explanation: "Das XOR-Gatter (Entweder-Oder) wird verwendet, wenn man entweder den einen oder den anderen Wert, aber nicht beide zusammen, als Ergebnis haben möchte."
            },
            {
                question: "6. Was passiert bei einer NOT-Verknüpfung, wenn der Eingang 1 ist?",
                answers: [
                    "Der Ausgang bleibt 1",
                    "Der Ausgang wechselt auf 0",
                    "Der Ausgang bleibt unverändert",
                    "Der Ausgang wird nicht beeinflusst"
                ],
                correct: ["Der Ausgang wechselt auf 0"],
                explanation: "Ein NOT-Gatter invertiert den Eingang, d.h., wenn der Eingang 1 ist, wird der Ausgang 0."
            },
            {
                question: "7. Was ist ein NAND-Gatter?",
                answers: [
                    "Ein Gatter, das nur bei beiden Eingängen 1 ausgibt",
                    "Ein Gatter, das das Ergebnis eines UND-Gatters negiert",
                    "Ein Gatter, das immer 1 ausgibt",
                    "Ein Gatter, das nur bei beiden Eingängen 0 ausgibt"
                ],
                correct: ["Ein Gatter, das das Ergebnis eines UND-Gatters negiert"],
                explanation: "Das NAND-Gatter gibt 0 aus, wenn beide Eingänge 1 sind, da es die Ausgabe eines UND-Gatters negiert."
            },
            {
                question: "8. Was beschreibt das Absorptionsgesetz in der Schaltalgebra?",
                answers: [
                    "A ∨ (A ∧ B) = A",
                    "A ∧ B = A ∨ B",
                    "¬(A ∨ B) = ¬A ∧ ¬B",
                    "A ∧ (A ∨ B) = B"
                ],
                correct: ["A ∨ (A ∧ B) = A"],
                explanation: "Das Absorptionsgesetz zeigt, wie überflüssige Terme in logischen Ausdrücken entfernt werden können. A ∨ (A ∧ B) vereinfacht sich zu A."
            },
            {
                question: "9. Was beschreibt das Negationsgesetz in der Schaltalgebra?",
                answers: [
                    "A ∨ ¬A = 1 und A ∧ ¬A = 0",
                    "¬A ∨ ¬B = A ∧ B",
                    "A ∧ B = ¬A ∨ ¬B",
                    "¬A ∧ B = A ∨ B"
                ],
                correct: ["A ∨ ¬A = 1 und A ∧ ¬A = 0"],
                explanation: "Das Negationsgesetz besagt, dass eine Variable oder ihr Gegenteil immer wahr ist (A ∨ ¬A = 1) und eine Variable und ihr Gegenteil gleichzeitig falsch sind (A ∧ ¬A = 0)."
            },
            {
                question: "0. Was zeigt das Ergebnis einer Modulo-Operation an?",
                answers: [
                    "Das Produkt der Division",
                    "Den Rest der Division",
                    "Die Anzahl der Einsen im Binärsystem",
                    "Die Parität eines Bits"
                ],
                correct: ["Den Rest der Division"],
                explanation: "Eine Modulo-Operation liefert den Rest der Division. Beispiel: 9 ÷ 2 = 4 Rest 1, daher ist das Ergebnis 1."
            },
            {
                question: "11. Was besagt das Kommutativgesetz in der Schaltalgebra?",
                answers: [
                    "A ∧ B = B ∧ A und A ∨ B = B ∨ A",
                    "A ∧ (A ∨ B) = A",
                    "¬(A ∨ B) = ¬A ∧ ¬B",
                    "A ∨ ¬A = 1"
                ],
                correct: ["A ∧ B = B ∧ A und A ∨ B = B ∨ A"],
                explanation: "Das Kommutativgesetz besagt, dass bei logischen UND- und ODER-Verknüpfungen die Reihenfolge der Operanden keinen Einfluss auf das Ergebnis hat."
            },
            {
                question: "12. Was ist der Hauptunterschied zwischen Cut-Through- und Store-and-Forward-Switching?",
                answers: [
                    "Cut-Through prüft das gesamte Paket auf Fehler, bevor es weitergeleitet wird.",
                    "Store-and-Forward minimiert die Latenz durch sofortige Weiterleitung.",
                    "Cut-Through leitet Pakete direkt nach dem Empfang der Zieladresse weiter.",
                    "Store-and-Forward wird nur für Echtzeitnetzwerke verwendet."
                ],
                correct: ["Cut-Through leitet Pakete direkt nach dem Empfang der Zieladresse weiter."],
                explanation: "Beim Cut-Through-Switching werden Pakete sofort nach Empfang der Zieladresse weitergeleitet, was die Latenz verringert."
            },
            {
                question: "13. Was besagt das Kommutativgesetz in der Schaltalgebra?",
                answers: [
                    "A ∧ B = B ∧ A und A ∨ B = B ∨ A",
                    "A ∧ (A ∨ B) = A",
                    "¬(A ∨ B) = ¬A ∧ ¬B",
                    "A ∨ ¬A = 1"
                ],
                correct: ["A ∧ B = B ∧ A und A ∨ B = B ∨ A"],
                explanation: "Das Kommutativgesetz besagt, dass bei logischen UND- und ODER-Verknüpfungen die Reihenfolge der Operanden keinen Einfluss auf das Ergebnis hat."
            },
            {
                question: "14. Was ist eine Konjunktive Normalform (KNF) in der Schaltalgebra?",
                answers: [
                    "Eine Disjunktion von Konjunktionen",
                    "Eine Konjunktion von Disjunktionen",
                    "Eine Verknüpfung von Negationen",
                    "Eine Disjunktion von NAND-Gattern"
                ],
                correct: ["Eine Konjunktion von Disjunktionen"],
                explanation: "Eine Formel ist in Konjunktiver Normalform (KNF), wenn sie eine Konjunktion (UND) von Disjunktionen (ODER) ist."
            },
            {
                question: "15. Was beschreibt das Assoziativgesetz in der Schaltalgebra?",
                answers: [
                    "Die Reihenfolge der Verknüpfungen kann ohne Einfluss auf das Ergebnis geändert werden.",
                    "Das Ergebnis ist nur wahr, wenn alle Operanden wahr sind.",
                    "Die Verknüpfung zweier Variablen ist identisch mit deren Summe.",
                    "Es gibt eine 1 zurück, wenn die Anzahl der Einsen ungerade ist."
                ],
                correct: ["Die Reihenfolge der Verknüpfungen kann ohne Einfluss auf das Ergebnis geändert werden."],
                explanation: "Das Assoziativgesetz besagt, dass bei UND- und ODER-Verknüpfungen die Reihenfolge der Operanden keinen Einfluss auf das Ergebnis hat."
            },
            {
                question: "16. Welches Gesetz der Schaltalgebra beschreibt ¬(A ∧ B) = ¬A ∨ ¬B?",
                answers: [
                    "De Morgansches Gesetz",
                    "Absorptionsgesetz",
                    "Kommutativgesetz",
                    "Assoziativgesetz"
                ],
                correct: ["De Morgansches Gesetz"],
                explanation: "De Morgansches Gesetz beschreibt, wie Negationen von UND- und ODER-Verknüpfungen umgekehrt werden."
            },
            {
                question: "17. Was zeigt der Modulo-Operator?",
                answers: [
                    "Den Rest einer Division",
                    "Das Produkt einer Division",
                    "Die Anzahl der Nullen in einer Zahl",
                    "Den Durchschnitt zweier Zahlen"
                ],
                correct: ["Den Rest einer Division"],
                explanation: "Der Modulo-Operator liefert den Rest einer Division, z.B. 9 ÷ 2 = 4 Rest 1, daher ist das Ergebnis 1."
            },
            {
                question: "18. Was zeigt der Modulo-Operator in einer Division an?",
                answers: [
                    "Den Rest der Division",
                    "Das Ergebnis der Division",
                    "Den Quotienten der Division",
                    "Die Anzahl der Stellen in der Binärdarstellung"
                ],
                correct: ["Den Rest der Division"],
                explanation: "Der Modulo-Operator zeigt den Rest einer Division an. Zum Beispiel, 9 ÷ 2 = 4 Rest 1, daher ist das Ergebnis 1."
            },
            {
                question: "19. Was beschreibt das De Morgansche Gesetz in der Schaltalgebra?",
                answers:
                    [
                        "¬(A ∧ B) = ¬A ∨ ¬B",
                        "A ∧ B = B ∨ A",
                        "A ∧ ¬B = A ∨ ¬B",
                        "A ODER B = A UND B"
                    ],
                correct: ["¬(A ∧ B) = ¬A ∨ ¬B"],
                explanation: "Das De Morgansche Gesetz beschreibt die Umkehrung der Verknüpfungen UND und ODER durch Negationen."
            },
            {
                question: "20. Was besagt das Absorptionsgesetz in der Schaltalgebra?",
                answers:
                    [
                        "A ∨ (A ∧ B) = A",
                        "¬(A ∨ B) = ¬A ∧ ¬B",
                        "A ∧ B = B ∨ A",
                        "A ODER B = A UND B"
                    ],
                correct: ["A ∨ (A ∧ B) = A"],
                explanation: "Das Absorptionsgesetz vereinfacht logische Ausdrücke, indem überflüssige Terme entfernt werden."
            },
            {
                question: "21. Was beschreibt das Kommutativgesetz in der Schaltalgebra?",
                answers:
                    [
                        "A ∧ B = B ∧ A",
                        "¬(A ∨ B) = ¬A ∧ ¬B",
                        "A ∧ (A ∨ B) = A",
                        "A ∨ A = A"
                    ],
                correct: ["A ∧ B = B ∧ A"],
                explanation: "Das Kommutativgesetz besagt, dass die Reihenfolge der Variablen bei UND- und ODER-Verknüpfungen keinen Einfluss auf das Ergebnis hat."
            },
            {
                question: "22. Was zeigt die Modulo-Operation an?",
                answers: [
                    "Den Rest einer Division.",
                    "Den Quotienten einer Division.",
                    "Das Produkt zweier Zahlen.",
                    "Die Anzahl der Bits in einer Zahl."
                ],
                correct: ["Den Rest einer Division."],
                explanation: "Die Modulo-Operation liefert den Rest einer Division. Beispielsweise ist 9 mod 2 = 1.",
                images: [
                    {
                        src: "path_to_image.jpg",  // Path to any relevant image illustrating Schaltalgebra or Modulo concepts
                        alt: "Ein Bild, das die Modulo-Operation veranschaulicht"
                    }
                ],
                
            },
            {
                question: "23. Was beschreibt die logische Funktion XOR?",
                answers: [
                    "Eine Funktion, die die Summe zweier Zahlen berechnet.",
                    "Eine Funktion, die 1 ergibt, wenn die Anzahl der 1en ungerade ist.",
                    "Eine Funktion, die das Produkt zweier Zahlen berechnet.",
                    "Eine Funktion, die immer 0 ergibt."
                ],
                correct: ["Eine Funktion, die 1 ergibt, wenn die Anzahl der 1en ungerade ist."],
                explanation: "Die XOR-Funktion gibt nur dann 1 aus, wenn die Anzahl der Einsen in den Eingaben ungerade ist, andernfalls gibt sie 0 aus."
            },
            {
                question: "24. Welcher Wert wird beim XOR-Operator für 1+1 ausgegeben?",
                answers: [
                    "1",
                    "0",
                    "2",
                    "Unendlich"
                ],
                correct: ["0"],
                explanation: "Bei der XOR-Operation ergibt die Eingabe 1 XOR 1 das Ergebnis 0, da die Anzahl der Einsen gerade ist."
            },
            {
                question: "25. Welche Konstanten kennt die Schaltalgebra?",
                answers: [
                    "Die Werte -1 und 1",
                    "Die Werte 0 und 1",
                    "Alle positiven Zahlen",
                    "Alle negativen Zahlen"
                ],
                correct: ["Die Werte 0 und 1"],
                explanation: "In der Schaltalgebra gibt es nur die beiden Zustände 0 (falsch) und 1 (wahr), was dem binären System entspricht."
            },
            {
                question: "26. In der Schaltalgebra können Variablen welche Werte annehmen?",
                answers: [
                    "Nur 0 und 1",
                    "Jede beliebige Zahl",
                    "Nur positive Zahlen",
                    "Nur negative Zahlen"
                ],
                correct: ["Nur 0 und 1"],
                explanation: "Variablen in der Schaltalgebra sind binär und können daher nur die Werte 0 und 1 annehmen."
            },
            {
                question: "27. Wann sind Klammern in der Schaltalgebra erforderlich?",
                answers: [
                    "Bei der NOR-Verknüpfung",
                    "Bei der UND-Verknüpfung",
                    "Bei der ODER-Verknüpfung",
                    "Bei der XOR-Verknüpfung"
                ],
                correct: ["Bei der ODER-Verknüpfung"],
                explanation: "Klammern sind in der Schaltalgebra bei der ODER-Verknüpfung erforderlich, um den Vorrang der UND-Verknüpfung korrekt darzustellen."
            },
            {
                question: "28. Welche Verknüpfungen haben in der Schaltalgebra Vorrang?",
                answers: [
                    "ODER-Verknüpfungen vor UND-Verknüpfungen",
                    "UND-Verknüpfungen vor ODER-Verknüpfungen",
                    "NOR-Verknüpfungen vor XOR-Verknüpfungen",
                    "XOR-Verknüpfungen vor NOR-Verknüpfungen"
                ],
                correct: ["UND-Verknüpfungen vor ODER-Verknüpfungen"],
                explanation: "In der Schaltalgebra haben UND-Verknüpfungen Vorrang vor ODER-Verknüpfungen, ähnlich wie in der klassischen Algebra Multiplikation Vorrang vor Addition hat."
            },
            {
                question: "29. Welches Ergebnis liefert die Modulo-Operation?",
                answers: [
                    "Den Rest einer Division.",
                    "Den Quotienten einer Division.",
                    "Das Produkt zweier Zahlen.",
                    "Die Anzahl der Bits in einer Zahl."
                ],
                correct: ["Den Rest einer Division."],
                explanation: "Die Modulo-Operation berechnet den Rest einer Division. Beispielsweise ist das Ergebnis von 9 mod 2 gleich 1."
            },
            {
                question: "30. Was beschreibt die logische Funktion XOR?",
                answers: [
                    "Eine Funktion, die die Summe zweier Zahlen berechnet.",
                    "Eine Funktion, die 1 ergibt, wenn die Anzahl der 1en ungerade ist.",
                    "Eine Funktion, die das Produkt zweier Zahlen berechnet.",
                    "Eine Funktion, die immer 0 ergibt."
                ],
                correct: ["Eine Funktion, die 1 ergibt, wenn die Anzahl der 1en ungerade ist."],
                explanation: "Die XOR-Funktion gibt 1 aus, wenn die Eingabebits eine ungerade Anzahl an Einsen haben."
            },
            {
                question: "31. Welcher Wert wird beim XOR-Operator für 1+1 ausgegeben?",
                answers: [
                    "1",
                    "0",
                    "2",
                    "Unendlich"
                ],
                correct: ["0"],
                explanation: "Da 1 XOR 1 das Ergebnis 0 liefert, zeigt dies, dass die XOR-Operation eine gerade Anzahl von Einsen in den Eingaben erkennt."
            },
            {
                question: "32. Welche Konstanten kennt die Schaltalgebra?",
                answers: [
                    "Die Werte -1 und 1",
                    "Die Werte 0 und 1",
                    "Alle positiven Zahlen",
                    "Alle negativen Zahlen"
                ],
                correct: ["Die Werte 0 und 1"],
                explanation: "In der Schaltalgebra repräsentieren die Werte 0 und 1 die einzigen Zustände, die eine logische Aussage annehmen kann: falsch und wahr."
            },
            {
                question: "33. Wann sind Klammern in der Schaltalgebra erforderlich?",
                answers: [
                    "Bei der NOR-Verknüpfung",
                    "Bei der UND-Verknüpfung",
                    "Bei der ODER-Verknüpfung",
                    "Bei der XOR-Verknüpfung"
                ],
                correct: ["Bei der ODER-Verknüpfung"],
                explanation: "Um die Reihenfolge der logischen Operationen zu verdeutlichen, sind Klammern bei der ODER-Verknüpfung erforderlich, wenn UND ebenfalls verwendet wird."
            },
            {
                question: "34. Welche Verknüpfungen haben in der Schaltalgebra Vorrang?",
                answers: [
                    "ODER-Verknüpfungen vor UND-Verknüpfungen",
                    "UND-Verknüpfungen vor ODER-Verknüpfungen",
                    "NOR-Verknüpfungen vor XOR-Verknüpfungen",
                    "XOR-Verknüpfungen vor NOR-Verknüpfungen"
                ],
                correct: ["UND-Verknüpfungen vor ODER-Verknüpfungen"],
                explanation: "In der Reihenfolge der Auswertung in der Schaltalgebra haben UND-Verknüpfungen stets Vorrang vor ODER-Verknüpfungen."
            },
        
       

    ],
    Protocol:
     [
            {
                question: "1. Welches Protokoll wird für die Dateiverwaltung im Netzwerk verwendet?",
                answers: [
                    "HTTP: HyperText Transfer Protocol",
                    "FTP: File Transfer Protocol",
                    "SMTP:Simple Mail Transfer Protocol",
                    "DNS :Domain Name System"
                ],
                correct: ["FTP"],
                explanation: "FTP (File Transfer Protocol) wird verwendet, um Dateien über das Netzwerk zu übertragen und zu verwalten."
            },
            {
                question: "2. Welches Protokoll dient der IP-Adressauflösung im Netzwerk?",
                answers: [
                    "ARP:Address Resolution Protocol",
                    "DNS: Domain Name System",
                    "ICMP :Internet Control Message Protocol",
                    "SMTP :Simple Mail Transfer Protocol"
                ],
                correct: ["DNS"],
                explanation: "Das DNS (Domain Name System) wandelt Domain-Namen in IP-Adressen um, sodass Computer im Netzwerk sie verstehen können."
            },
            {
                question: "3. Wofür wird das DHCP-Protokoll verwendet?",
                answers: [
                    "Zur Datenübertragung zwischen Servern",
                    "Zur Konfiguration von IP-Adressen",
                    "Zur Fehlerbehebung im Netzwerk",
                    "Zur Steuerung des Datenflusses"
                ],
                correct: ["Zur Konfiguration von IP-Adressen"],
                explanation: "DHCP (Dynamic Host Configuration Protocol) stellt automatisch IP-Adressen für Geräte im Netzwerk bereit."
            },
            {
                question: "4. Welches Protokoll wird zur Fehlerkontrolle und Netzwerkdiagnose verwendet?",
                answers: [
                    "TCP: Transmission Control Protocol",
                    "ICMP : Internet Control Message Protocol",
                    "FTP : File Transfer Protocol",
                    "RIP : Routing Information Protocol"
                ],
                correct: ["ICMP"],
                explanation: "Das ICMP (Internet Control Message Protocol) dient zur Netzwerkdiagnose und Fehlerkontrolle, z.B. durch Ping-Anfragen."
            },
            {
                question: "5. Wofür wird das HTTP-Protokoll verwendet?",
                answers: [
                    "Zur Übertragung von E-Mails",
                    "Zur Übertragung von Webseiteninhalten",
                    "Zur Konfiguration von IP-Adressen",
                    "Zur Steuerung des Zugriffs auf Dateien"
                ],
                correct: ["Zur Übertragung von Webseiteninhalten"],
                explanation: "HTTP (HyperText Transfer Protocol) wird zur Übertragung von Webseiteninhalten im Internet verwendet."
            },
            {
                question: "6. Welches Protokoll ermöglicht die Remote-Anmeldung auf Unix-Systemen?",
                answers: [
                    "RLOGIN",
                    "FTP",
                    "DNS",
                    "SMTP"
                ],
                correct: ["RLOGIN"],
                explanation: "RLOGIN ermöglicht es Benutzern, sich remote auf Unix-Systemen anzumelden und darauf zuzugreifen."
            },
            {
                question: "7. Welches Protokoll bietet Routing-Informationen im Netzwerk?",
                answers: [
                    "ICMP: Internet Control Message Protocol",
                    "RIP :  Routing Information Protocol",
                    "FTP : File Transfer Protocol",
                    "ARP"
                ],
                correct: ["RIP: Address Resolution Protocol"],
                explanation: "Das RIP (Routing Information Protocol) verteilt Routing-Informationen, um Datenpakete im Netzwerk zu leiten."
            },
            {
                question: "8. Wofür wird das SMTP-Protokoll verwendet?",
                answers: [
                    "Für den Versand von E-Mails",
                    "Für die Auflösung von IP-Adressen",
                    "Für den Zugriff auf Drucker",
                    "Für die Dateikomprimierung"
                ],
                correct: ["Für den Versand von E-Mails"],
                explanation: "SMTP (Simple Mail Transfer Protocol) wird für den Versand von E-Mails über Netzwerke verwendet."
            },
            {
                question: "9. Welches Protokoll dient der Adressauflösung in lokalen Netzwerken?",
                answers: [
                    "DNS: Domain Name System",
                    "ARP: Address Resolution Protocol",
                    "FTP: File Transfer Protocol",
                    "SMTP: Simple Mail Transfer Protocol"
                ],
                correct: ["ARP: Address Resolution Protocol"],
                explanation: "ARP (Address Resolution Protocol) wird verwendet, um IP-Adressen in MAC-Adressen für lokale Netzwerke aufzulösen."
            },
            {
                question: "10. Welches Protokoll wird zur Verschlüsselung und Authentifizierung beim Zugriff auf Netzwerke verwendet?",
                answers: [
                    "TACACS+: Terminal Access Controller Access Control System Plus",
                    "FTP: File Transfer Protocol",
                    "SMTP: Simple Mail Transfer Protocol",
                    "HTTP: HyperText Transfer Protocol "
                ],
                correct: ["TACACS+: Terminal Access Controller Access Control System Plus"],
                explanation: "TACACS+ ist ein Protokoll für Authentifizierung und Verschlüsselung, das beim Netzwerkzugriff verwendet wird."
            },
            {
                question: "11. Welches Protokoll ermöglicht die Namensauflösung und Verwaltung von IP-Adressen in einem Netzwerk?",
                answers: [
                    "SMTP:Simple Mail Transfer Protocol",
                    "NIS: Network Information Service",
                    "DNS: Domain Name System",
                    "HTTP: HyperText Transfer Protocol"
                ],
                correct: ["DNS: Domain Name System"],
                explanation: "DNS ermöglicht die Auflösung von Domänennamen in IP-Adressen und ist essenziell für die Navigation im Netzwerk."
            },
            {
                question: "12. Welches Protokoll wird zur dynamischen Zuweisung von IP-Adressen an Geräte im Netzwerk verwendet?",
                answers: [
                    "BOOTP:Bootstrap Protocol",
                    "SMTP: Simple Mail Transfer Protocol",
                    "SNMP: Simple Network Management Protocol",
                    "NFS: Network File System"
                ],
                correct: ["BOOTP:Bootstrap Protocol"],
                explanation: "BOOTP (Bootstrap Protocol) wird zur Zuweisung von IP-Adressen an Geräte verwendet, insbesondere während des Startvorgangs."
            },
            {
                question: "13. Welches Protokoll wird für den Zugriff auf Netzwerkdateisysteme genutzt?",
                answers: [
                    "NFS: Network File System",
                    "FTP: File Transfer Protocol",
                    "SMTP: Simple Mail Transfer Protocol",
                    "HTTP: HyperText Transfer Protocol"
                ],
                correct: ["NFS:Network File System"],
                explanation: "NFS (Network File System) erlaubt den Zugriff auf Dateien und Verzeichnisse, als ob sie auf dem lokalen Computer gespeichert wären."
            },
            {
                question: "14. Welches Protokoll ist für die Umwandlung von IP-Adressen in MAC-Adressen zuständig?",
                answers: [
                    "RARP: Reverse Address Resolution Protocol",
                    "ICMP: Internet Control Message Protocol",
                    "FTP: File Transfer Protocol",
                    "TFTP: Trivial File Transfer Protocol"
                ],
                correct: ["RARP:Reverse Address Resolution Protocol"],
                explanation: "RARP (Reverse Address Resolution Protocol) wandelt IP-Adressen in physikalische MAC-Adressen um, um Geräte im Netzwerk zu identifizieren."
            },
            {
                question: "15. Welches Protokoll stellt eine zuverlässige und verbindungsorientierte Datenübertragung bereit?",
                answers: [
                    "UDP:User Datagram Protocol",
                    "HTTP: HyperText Transfer Protocol",
                    "TCP: Transmission Control Protocol",
                    "DNS: Domain Name System"
                ],
                correct: ["TCP:Transmission Control Protocol"],
                explanation: "TCP (Transmission Control Protocol) bietet eine zuverlässige und verbindungsorientierte Datenübertragung, die sicherstellt, dass Pakete vollständig und in der richtigen Reihenfolge ankommen."
            },
            {
                question: "16. Wofür wird das SNMP-Protokoll verwendet?",
                answers: [
                    "Zur Netzwerkverwaltung",
                    "Zur Benutzerauthentifizierung",
                    "Zur Druckersteuerung",
                    "Zur Dateikomprimierung"
                ],
                correct: ["Zur Netzwerkverwaltung"],
                explanation: "SNMP (Simple Network Management Protocol) wird zur Überwachung und Verwaltung von Netzwerkgeräten wie Routern und Switches eingesetzt."
            },
            {
                question: "17. Welches Protokoll wird im Token-Ring-Netzwerk verwendet, um die Übertragung zu kontrollieren?",
                answers: [
                    "Ethernet",
                    "ICMP: Internet Control Message Protocol",
                    "SDLC: Synchronous Data Link Control",
                    "Token Passing"
                ],
                correct: ["Token Passing"],
                explanation: "Token Passing ist ein Kontrollmechanismus im Token-Ring-Netzwerk, der die Reihenfolge der Datenübertragung steuert, um Kollisionen zu vermeiden."
            },
            {
                question: "18. Was ermöglicht das RLOGIN-Protokoll?",
                answers: [
                    "Fernsteuerung von Unix-Systemen",
                    "DNS-Auflösung",
                    "Dateizugriff im Netzwerk",
                    "Fehlerkontrolle"
                ],
                correct: ["Fernsteuerung von Unix-Systemen"],
                explanation: "RLOGIN (Remote Login) ermöglicht es Benutzern, sich remote bei Unix-Systemen anzumelden und diese zu steuern."
            },
            {
                question: "19. Welches Protokoll wird für Multicast-Übertragungen im Internet verwendet?",
                answers: [
                    "IGMP:Internet Group Management Protocol",
                    "FTP File Transfer Protocol",
                    "ARP:Address Resolution Protocol",
                    "SMTP:Simple Mail Transfer Protocol"
                ],
                correct: ["IGMP:Internet Group Management Protocol"],
                explanation: "IGMP (Internet Group Management Protocol) ermöglicht die Verwaltung von Multicast-Gruppen für die Übertragung an mehrere Empfänger."
            },
            {
                question: "20. Welches Protokoll wird häufig für die Synchronisation der Zeit über Netzwerke verwendet?",
                answers: [
                    "SNMP:Simple Network Managment Protocol",
                    "DNS:Domain Name System",
                    "NTP:Network Time Protocol",
                    "HTTP: HypterText Transfer Protocol"
                ],
                correct: ["NTP:Network Time Protocol"],
                explanation: "NTP (Network Time Protocol) synchronisiert die Uhrzeit zwischen Computern und Netzwerkgeräten, um eine einheitliche Zeitbasis sicherzustellen."
            },
     ],
     IPADD:
     [
        {
            question: "1. Wie lautet die dezimale Darstellung der IP-Adresse 10000011 01101011 00000011 00011000?",
            answers: [
                "128.105.3.16",
                "131.107.3.24",
                "132.108.3.24",
                "130.106.3.25"
            ],
            correct: ["131.107.3.24"],
            explanation: "Die binäre IP-Adresse 10000011 01101011 00000011 00011000 entspricht der Dezimaladresse 131.107.3.24."
        },
        {
            question: "2. Welche Subnetzmaske gehört zum privaten IP-Bereich der Klasse A?",
            answers: [
                "255.0.0.0",
                "255.255.0.0",
                "255.255.255.0",
                "255.0.255.0"
            ],
            correct: ["255.0.0.0"],
            explanation: "Für den privaten IP-Adressbereich der Klasse A wird die Subnetzmaske 255.0.0.0 verwendet."
        },
        {
            question: "3. Welcher IP-Bereich gehört zur privaten IP-Adressklasse B?",
            answers: [
                "10.0.0.0 – 10.255.255.255",
                "172.16.0.0 – 172.31.255.255",
                "192.168.0.0 – 192.168.255.255",
                "10.0.0.0 – 172.16.255.255"
            ],
            correct: ["172.16.0.0 – 172.31.255.255"],
            explanation: "Der private IP-Adressbereich der Klasse B umfasst die Adressen von 172.16.0.0 bis 172.31.255.255."
        },
        {
            question: "4. Welche Subnetzmaske hat der private IP-Bereich der Klasse C?",
            answers: [
                "255.0.0.0",
                "255.255.0.0",
                "255.255.255.0",
                "255.255.255.255"
            ],
            correct: ["255.255.255.0"],
            explanation: "Die Klasse-C-Subnetzmaske für private IP-Adressen ist 255.255.255.0."
        },
        {
            question: "5. Welches CIDR-Format hat der private IP-Bereich der Klasse B?",
            answers: [
                "/8",
                "/16",
                "/24",
                "/32"
            ],
            correct: ["/16"],
            explanation: "Das CIDR-Format für den privaten IP-Adressbereich der Klasse B ist /16."
        },
        {
            question: "6. Welche binäre Darstellung gehört zur Subnetzmaske 255.255.0.0?",
            answers: [
                "11111111 00000000 00000000 00000000",
                "11111111 11111111 00000000 00000000",
                "11111111 11111111 11111111 00000000",
                "11111111 11111111 11111111 11111111"
            ],
            correct: ["11111111 11111111 00000000 00000000"],
            explanation: "Die binäre Darstellung der Subnetzmaske 255.255.0.0 ist 11111111 11111111 00000000 00000000."
        },
        {
            question: "7. Welche Bestandteile hat eine IPv4-Adresse?",
            answers: [
                "Nur die Host-ID",
                "Netzwerk-ID und Host-ID",
                "Nur die Subnetzmaske",
                "IP-Adresse und MAC-Adresse"
            ],
            correct: ["Netzwerk-ID und Host-ID"],
            explanation: "Eine IPv4-Adresse besteht aus der Netzwerk-ID, die das Netzwerk identifiziert, und der Host-ID, die den spezifischen Computer im Netzwerk identifiziert."
        },
        {
            question: "8. Welche Schreibweise wird für IPv4-Adressen üblicherweise verwendet?",
            answers: [
                "Binär",
                "Punktierte Dezimalschreibweise",
                "Hexadezimal",
                "Octal"
            ],
            correct: ["Punktierte Dezimalschreibweise"],
            explanation: "IPv4-Adressen werden meist in der punktierten Dezimalschreibweise dargestellt, wie z.B. 192.168.1.1."
        },
        {
            question: "9. Was ist der Dezimalwert eines Oktetts, wenn alle Bits auf 1 gesetzt sind?",
            answers: [
                "255",
                "128",
                "127",
                "256"
            ],
            correct: ["255"],
            explanation: "Wenn alle Bits in einem 8-Bit-Oktett auf 1 gesetzt sind, ergibt das den Dezimalwert 255."
        },
        {
            question: "10. Welche IP-Adressen gehören zu privaten IPv4-Bereichen?",
            answers: [
                "10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
                "8.8.8.8, 1.1.1.1",
                "192.0.2.0/24",
                "224.0.0.0/4"
            ],
            correct: ["10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16"],
            explanation: "Die Adressbereiche 10.0.0.0/8, 172.16.0.0/12 und 192.168.0.0/16 sind für den privaten Gebrauch reserviert und nicht im öffentlichen Internet routingfähig."
        },
        {
            question: "11. Welche Funktion hat die Subnetzmaske in einem IPv4-Netzwerk?",
            answers: [
                "Identifiziert, welcher Teil der IP-Adresse die Netzwerk-ID und welcher die Host-ID ist",
                "Verhindert den Zugriff auf das Internet",
                "Ermöglicht den Zugriff auf private Netzwerke",
                "Speichert die MAC-Adresse"
            ],
            correct: ["Identifiziert, welcher Teil der IP-Adresse die Netzwerk-ID und welcher die Host-ID ist"],
            explanation: "Die Subnetzmaske legt fest, welche Bits einer IP-Adresse zur Netzwerk-ID und welche zur Host-ID gehören."
        },
        {
            question: "12. Was bedeutet APIPA?",
            answers: [
                "Automatic Private IP Addressing",
                "Address Protocol for Internet Access",
                "Automated Public IP Allocation",
                "Alternative Private Internet Access"
            ],
            correct: ["Automatic Private IP Addressing"],
            explanation: "APIPA (Automatic Private IP Addressing) weist einem Gerät eine IP-Adresse zu, wenn kein DHCP-Server verfügbar ist."
        },
        {
            question: "13. Welche IPv4-Adresse würde APIPA einem Gerät zuweisen?",
            answers: [
                "169.254.x.x",
                "10.0.0.x",
                "192.168.0.x",
                "172.16.0.x"
            ],
            correct: ["169.254.x.x"],
            explanation: "APIPA-Adressen befinden sich im Bereich 169.254.0.0 bis 169.254.255.255 und werden verwendet, wenn kein DHCP-Server verfügbar ist."
        },
        {
            question: "14. Was ist die Aufgabe eines DHCP-Servers in einem IPv4-Netzwerk?",
            answers: [
                "Verwaltet die DNS-Auflösung",
                "Weist IP-Adressen automatisch zu",
                "Filtert eingehenden Netzwerkverkehr",
                "Speichert MAC-Adressen"
            ],
            correct: ["Weist IP-Adressen automatisch zu"],
            explanation: "Ein DHCP-Server (Dynamic Host Configuration Protocol) stellt Geräten automatisch IP-Adressen zur Verfügung."
        },
        {
            question: "15. Welche Tools sind für die IPv4-Problembehandlung nützlich?",
            answers: [
                "Ping, Ipconfig, Tracert, Pathping",
                "MS Word, Excel, PowerPoint",
                "Paint, Calculator, Notepad",
                "SSH, FTP, SCP"
            ],
            correct: ["Ping, Ipconfig, Tracert, Pathping"],
            explanation: "Tools wie Ping, Ipconfig, Tracert und Pathping helfen bei der Diagnose und Behebung von Netzwerkproblemen."
        },
        {
            question: "16. Was zeigt der Befehl 'ipconfig' an?",
            answers: [
                "Die aktuelle Netzwerkkonfiguration eines Computers",
                "Die Liste aller MAC-Adressen im Netzwerk",
                "Nur die IPv6-Adresse",
                "Die Namen aller verbundenen Geräte"
            ],
            correct: ["Die aktuelle Netzwerkkonfiguration eines Computers"],
            explanation: "Der Befehl 'ipconfig' zeigt die aktuelle IPv4- und IPv6-Konfiguration eines Computers, einschließlich IP-Adressen, Subnetzmasken und Gateways."
        },
        {
            question: "17. Welche Informationen enthält eine Routingtabelle?",
            answers: [
                "Netzwerkziel, Netzwerkmaske, Gateway, Schnittstelle und Metrik",
                "Nur die Netzwerkmaske",
                "MAC-Adressen der Netzwerkgeräte",
                "Die Liste aller privaten IP-Adressen"
            ],
            correct: ["Netzwerkziel, Netzwerkmaske, Gateway, Schnittstelle und Metrik"],
            explanation: "Eine Routingtabelle enthält Informationen zu Zielen, Masken, Gateways, Schnittstellen und Metriken für den Netzwerkverkehr."
        },
        {
            question: "18. Welche PowerShell-Cmdlets können zur Konfiguration von IPv4 verwendet werden?",
            answers: [
                "Get-NetIPInterface, Set-DnsClientServerAddress, Test-NetConnection",
                "Get-Content, Set-ExecutionPolicy, Restart-Computer",
                "Get-Process, Set-Location, Remove-Item",
                "Get-Mailbox, Set-Calendar, Test-Service"
            ],
            correct: ["Get-NetIPInterface, Set-DnsClientServerAddress, Test-NetConnection"],
            explanation: "Cmdlets wie Get-NetIPInterface, Set-DnsClientServerAddress und Test-NetConnection werden für die IPv4-Konfiguration und -Fehlerbehebung verwendet."
        },
        {
            question: "19. Was ist die Funktion von Microsoft Message Analyzer?",
            answers: [
                "Er analysiert Netzwerkverkehr und protokolliert Pakete",
                "Er erstellt Netzwerkdiagramme",
                "Er konfiguriert Netzwerkrouter",
                "Er überwacht die Leistung des Arbeitsspeichers"
            ],
            correct: ["Er analysiert Netzwerkverkehr und protokolliert Pakete"],
            explanation: "Microsoft Message Analyzer dient zur Erfassung und Analyse von Netzwerkpaketen zur Fehlerbehebung und Leistungsmessung."
        },
        {
            question: "20. Was ist ein Supernetz (Supernetting) im IPv4-Kontext?",
            answers: [
                "Eine Technik zur Kombination mehrerer kleiner Netzwerke zu einem größeren Netzwerk",
                "Ein alternatives Protokoll für IPv6",
                "Eine Technik zur Verkleinerung eines Netzwerks",
                "Eine spezielle Art von IP-Adresse"
            ],
            correct: ["Eine Technik zur Kombination mehrerer kleiner Netzwerke zu einem größeren Netzwerk"],
            explanation: "Supernetting ermöglicht das Zusammenfassen kleinerer Netzwerke, um IP-Adressräume effizienter zu nutzen."
        },
        {
            question: "21. Was ist die Netzwerk-ID für die Adresse 192.168.52.98 mit der Subnetzmaske 255.255.255.0?",
            answers: [
                "192.168.52.0",
                "192.168.52.98",
                "192.168.0.0",
                "192.168.1.0"
            ],
            correct: ["192.168.52.0"],
            explanation: "Mit der Subnetzmaske 255.255.255.0 gehört die IP-Adresse 192.168.52.98 zum Netzwerk 192.168.52.0."
        },
        {
            question: "22. Was ist der Zweck der Netzwerk-ID und Host-ID in einer IPv4-Adresse?",
            answers: [
                "Die Netzwerk-ID identifiziert das Netzwerk, die Host-ID den spezifischen Computer im Netzwerk",
                "Die Netzwerk-ID identifiziert das Subnetz, die Host-ID den Router",
                "Beide identifizieren den spezifischen Computer im Netzwerk",
                "Die Netzwerk-ID identifiziert das Betriebssystem"
            ],
            correct: ["Die Netzwerk-ID identifiziert das Netzwerk, die Host-ID den spezifischen Computer im Netzwerk"],
            explanation: "Eine IPv4-Adresse besteht aus der Netzwerk-ID und der Host-ID, die zusammen das Netzwerk und den spezifischen Computer identifizieren."
        },
        {
            question: "23. Was beschreibt die punktierte Dezimalschreibweise in IPv4?",
            answers: [
                "Eine Darstellung der IPv4-Adresse in Binärform",
                "Eine Dezimaldarstellung der IPv4-Adresse, z.B. 192.168.1.1",
                "Eine Hexadezimaldarstellung der IPv4-Adresse",
                "Eine Oktaldarstellung der IPv4-Adresse"
            ],
            correct: ["Eine Dezimaldarstellung der IPv4-Adresse, z.B. 192.168.1.1"],
            explanation: "IPv4-Adressen werden meist in der punktierten Dezimalschreibweise dargestellt, um sie für Menschen lesbarer zu machen."
        },
        {
            question: "24. Welche privaten IP-Adressbereiche sind im IPv4-Standard definiert?",
            answers: [
                "10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
                "192.0.2.0/24, 198.51.100.0/24",
                "8.8.8.0/24, 1.1.1.0/24",
                "224.0.0.0/4, 240.0.0.0/4"
            ],
            correct: ["10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16"],
            explanation: "Diese Adressbereiche sind für die private Nutzung reserviert und im öffentlichen Internet nicht routingfähig."
        },
        {
            question: "25. Was bedeutet APIPA im Kontext von IPv4?",
            answers: [
                "Automatic Private IP Addressing",
                "Alternative Public IP Allocation",
                "Address Protocol for Internet Access",
                "Automated Protocol Initialization Process"
            ],
            correct: ["Automatic Private IP Addressing"],
            explanation: "APIPA (Automatic Private IP Addressing) weist Geräten automatisch IP-Adressen zu, wenn kein DHCP-Server verfügbar ist."
        },
        {
            question: "26. In welchem IP-Bereich liegen APIPA-Adressen?",
            answers: [
                "169.254.x.x",
                "192.168.x.x",
                "172.16.x.x",
                "10.0.x.x"
            ],
            correct: ["169.254.x.x"],
            explanation: "APIPA-Adressen befinden sich im Bereich 169.254.0.0 bis 169.254.255.255 und werden verwendet, wenn kein DHCP-Server verfügbar ist."
        },
        {
            question: "27. Was ist die Funktion eines DHCP-Servers in einem IPv4-Netzwerk?",
            answers: [
                "Er weist Geräten automatisch IP-Adressen zu",
                "Er filtert eingehenden Netzwerkverkehr",
                "Er speichert die MAC-Adressen der Geräte",
                "Er verwaltet die DNS-Auflösung"
            ],
            correct: ["Er weist Geräten automatisch IP-Adressen zu"],
            explanation: "Ein DHCP-Server stellt Geräten dynamisch IP-Adressen zur Verfügung und vereinfacht so die Netzwerkkonfiguration."
        },
        {
            question: "28. Welche Informationen sind in einer Routingtabelle enthalten?",
            answers: [
                "Netzwerkziel, Netzwerkmaske, Gateway, Schnittstelle und Metrik",
                "Nur die Netzwerkmaske",
                "MAC-Adressen der Netzwerkgeräte",
                "Nur die IPv6-Adresse des Gateways"
            ],
            correct: ["Netzwerkziel, Netzwerkmaske, Gateway, Schnittstelle und Metrik"],
            explanation: "Eine Routingtabelle enthält die Informationen, die zur Weiterleitung von Daten an ihr Ziel erforderlich sind."
        },
        {
            question: "29. Welche IPv4-Adressklasse wird für kleine Netzwerke mit bis zu 254 Hosts verwendet?",
            answers: [
                "Klasse C",
                "Klasse A",
                "Klasse B",
                "Klasse D"
            ],
            correct: ["Klasse C"],
            explanation: "Adressbereich der Klasse C eignet sich für kleine Netzwerke und umfasst bis zu 254 Hosts."
        },
        {
            question: "30. Was ist Supernetting im IPv4-Kontext?",
            answers: [
                "Eine Technik zur Kombination mehrerer kleiner Netzwerke zu einem größeren Netzwerk",
                "Eine Technik zur Verkleinerung eines Subnetzes",
                "Eine spezielle Art von dynamischer IP-Zuweisung",
                "Eine Methode zur Verschlüsselung von IP-Adressen"
            ],
            correct: ["Eine Technik zur Kombination mehrerer kleiner Netzwerke zu einem größeren Netzwerk"],
            explanation: "Beim Supernetting werden mehrere Netzwerke zusammengefasst, um die Nutzung von IP-Adressen effizienter zu gestalten."
        },
        {
            question: "31. Welche Tools sind für die Problembehandlung von IPv4-Verbindungen hilfreich?",
            answers: [
                "Ping, Ipconfig, Tracert, Pathping",
                "MS Word, Excel, PowerPoint",
                "SSH, FTP, SCP",
                "Paint, Calculator, Notepad"
            ],
            correct: ["Ping, Ipconfig, Tracert, Pathping"],
            explanation: "Diese Tools helfen, Netzwerkprobleme zu diagnostizieren und die Verbindungsqualität zu überprüfen."
        },
        {
            question: "32. Was zeigt der Befehl 'ipconfig' in einem IPv4-Netzwerk an?",
            answers: [
                "Die Netzwerkkonfiguration eines Computers",
                "Die MAC-Adressen aller Netzwerkgeräte",
                "Nur die IPv6-Adresse",
                "Die Namen aller verbundenen Geräte"
            ],
            correct: ["Die Netzwerkkonfiguration eines Computers"],
            explanation: "'ipconfig' zeigt die IPv4- und IPv6-Konfiguration eines Computers, einschließlich IP-Adressen und Gateways."
        },
        {
            question: "33. Welche PowerShell-Cmdlets können zur Verwaltung der IPv4-Konfiguration verwendet werden?",
            answers: [
                "Get-NetIPInterface, Set-DnsClientServerAddress, Test-NetConnection",
                "Get-Content, Set-ExecutionPolicy, Restart-Computer",
                "Get-Process, Set-Location, Remove-Item",
                "Get-Mailbox, Set-Calendar, Test-Service"
            ],
            correct: ["Get-NetIPInterface, Set-DnsClientServerAddress, Test-NetConnection"],
            explanation: "Cmdlets wie Get-NetIPInterface und Set-DnsClientServerAddress helfen bei der IPv4-Konfiguration und -Problembehandlung."
        },
        {
            question: "34. Was ist die Funktion von Microsoft Message Analyzer?",
            answers: [
                "Er analysiert Netzwerkverkehr und protokolliert Pakete",
                "Er erstellt Netzwerkdiagramme",
                "Er konfiguriert Netzwerkrouter",
                "Er überwacht die Leistung des Arbeitsspeichers"
            ],
            correct: ["Er analysiert Netzwerkverkehr und protokolliert Pakete"],
            explanation: "Microsoft Message Analyzer dient zur Erfassung und Analyse von Netzwerkpaketen zur Fehlerbehebung."
        },
        {
            question: "35. Wie funktioniert die CIDR-Notation (Classless Inter-Domain Routing)?",
            answers: [
                "Sie definiert IP-Bereiche unabhängig von Klassen durch eine Subnetzmaske",
                "Sie teilt IP-Bereiche in feste Klassen ein",
                "Sie beschreibt MAC-Adressen im Netzwerk",
                "Sie setzt IPv4-Adressen in IPv6-Adressen um"
            ],
            correct: ["Sie definiert IP-Bereiche unabhängig von Klassen durch eine Subnetzmaske"],
            explanation: "CIDR erlaubt flexible IP-Adressierungen, die nicht auf den festen Klassen A, B oder C basieren, durch die Angabe der Subnetzmaske."
        },
        {
            question: "36. Welche Methode wird verwendet, um IPv4-Routen in einem Netzwerk zu konfigurieren?",
            answers: [
                "Mit dem Befehl 'route add' und PowerShell-Cmdlets wie Get-NetRoute",
                "Durch den Befehl 'ipconfig'",
                "Durch DNS-Einstellungen",
                "Durch die Anpassung der MAC-Adressen"
            ],
            correct: ["Mit dem Befehl 'route add' und PowerShell-Cmdlets wie Get-NetRoute"],
            explanation: "IPv4-Routen können mit dem Befehl 'route add' oder PowerShell-Cmdlets wie Get-NetRoute verwaltet werden."
        },
        {
            question: "37. Was stellt die Netzwerk-ID in einer IPv4-Adresse dar?",
            answers: [
                "Den individuellen Host im Netzwerk.",
                "Das Netzwerk, zu dem der Host gehört.",
                "Die Subnetzmaske des Hosts.",
                "Die öffentliche IP-Adresse des Hosts."
            ],
            correct: ["Das Netzwerk, zu dem der Host gehört."],
            explanation: "Die Netzwerk-ID gibt an, zu welchem Netzwerk ein Host gehört und hilft, den Netzwerkanteil einer IPv4-Adresse zu identifizieren."
        },
        {
            question: "38. Welche Schreibweise wird für IPv4-Adressen im Dezimalsystem verwendet?",
            answers: [
                "Hexadezimal.",
                "Punktierte Dezimalschreibweise.",
                "Binäre Schreibweise.",
                "Dezimalstellen ohne Punkte."
            ],
            correct: ["Punktierte Dezimalschreibweise."],
            explanation: "IPv4-Adressen werden üblicherweise in der punktierten Dezimalschreibweise dargestellt, um die Lesbarkeit zu verbessern, z.B. 192.168.1.1."
        },
        {
            question: "39. Was zeigt eine APIPA-Adresse an?",
            answers: [
                "Der Host hat keine IP-Adresse vom DHCP erhalten.",
                "Der Host ist mit dem Internet verbunden.",
                "Der Host hat eine statische IP-Adresse.",
                "Der Host verwendet eine IPv6-Adresse."
            ],
            correct: ["Der Host hat keine IP-Adresse vom DHCP erhalten."],
            explanation: "Eine APIPA-Adresse (169.254.x.x) wird zugewiesen, wenn ein Host keine IP-Adresse von einem DHCP-Server erhalten konnte."
        },
        {
            question: "40. Was bedeutet Supernetting bei IPv4?",
            answers: [
                "Das Zusammenfassen mehrerer kleiner Netze zu einem größeren Netzwerk.",
                "Das Aufteilen eines großen Netzwerks in kleinere Netzwerke.",
                "Das Verwenden von privaten IP-Adressen im Internet.",
                "Die Verwendung von APIPA-Adressen."
            ],
            correct: ["Das Zusammenfassen mehrerer kleiner Netze zu einem größeren Netzwerk."],
            explanation: "Supernetting ist eine Methode, bei der mehrere zusammenhängende Netzwerke zu einem größeren Netzwerk kombiniert werden, um IP-Adressräume effizienter zu nutzen."
        },
        {
            question: "41. Welche IP-Adresse gehört zu den privaten Adressen?",
            answers: [
                "172.16.5.4",
                "8.8.8.8",
                "198.51.100.7",
                "120.10.15.25"
            ],
            correct: ["172.16.5.4"],
            explanation: "172.16.5.4 liegt im privaten IP-Adressbereich von 172.16.0.0 bis 172.31.255.255, der für private Netzwerke reserviert ist."
        },
        {
            question: "42. Wozu dient die Subnetzmaske in einer IPv4-Adresse?",
            answers: [
                "Zur Unterscheidung von Netzwerk- und Host-ID.",
                "Zur Identifizierung des Standardgateways.",
                "Zur Verschlüsselung der Datenübertragung.",
                "Zur Verbindung mit IPv6-Netzwerken."
            ],
            correct: ["Zur Unterscheidung von Netzwerk- und Host-ID."],
            explanation: "Die Subnetzmaske hilft zu bestimmen, welcher Teil der IP-Adresse das Netzwerk und welcher Teil den spezifischen Host beschreibt."
        },
        {
            question: "43. Welche Netzwerkklasse passt zu der Adresse 192.168.1.1?",
            answers: [
                "Klasse A",
                "Klasse B",
                "Klasse C",
                "Klasse D"
            ],
            correct: ["Klasse C"],
            explanation: "Die IP-Adresse 192.168.1.1 fällt in den Adressbereich der Klasse C, der von 192.0.0.0 bis 223.255.255.255 reicht."
        },
        {
            question: "44. Welche Adresse stellt eine Broadcast-Adresse für ein /24-Subnetz dar?",
            answers: [
                "192.168.1.255",
                "192.168.1.0",
                "192.168.1.1",
                "192.168.1.128"
            ],
            correct: ["192.168.1.255"],
            explanation: "In einem /24-Subnetz stellt die Adresse 192.168.1.255 die Broadcast-Adresse dar, die für die Kommunikation mit allen Hosts im Subnetz verwendet wird."
        },
        {
            question: "45. Was ist die erste nutzbare Adresse im Netzwerk 10.0.0.0/8?",
            answers: [
                "10.0.0.1",
                "10.0.0.0",
                "10.255.255.255",
                "10.0.1.1"
            ],
            correct: ["10.0.0.1"],
            explanation: "Die erste nutzbare IP-Adresse in einem /8-Subnetz beginnt bei 10.0.0.1, da 10.0.0.0 die Netzwerkadresse ist."
        },
        {
            question: "46. Welche Methode könnte für die Planung von IPv4-Adresszuweisungen für mehrere Standorte verwendet werden?",
            answers: [
                "Subnetting für jede Filiale",
                "Verwenden einer einzelnen öffentlichen IP-Adresse",
                "Zuweisung zufälliger IP-Adressen",
                "Einsatz nur von APIPA-Adressen"
            ],
            correct: ["Subnetting für jede Filiale"],
            explanation: "Durch das Aufteilen des IP-Adressraums in Subnetze kann jeder Standort eine eigene, eindeutige IP-Adressierung verwenden."
        },
        {
            question: "47. Wie viele nutzbare Hosts gibt es in einem /24-Subnetz?",
            answers: [
                "254",
                "256",
                "128",
                "512"
            ],
            correct: ["254"],
            explanation: "Ein /24-Subnetz hat 256 Adressen, wovon 254 für Hosts nutzbar sind. Die erste und letzte Adresse sind für das Netzwerk bzw. den Broadcast reserviert."
        },
        {
            question: "48. Welche Adresse ist eine APIPA-Adresse?",
            answers: [
                "169.254.1.1",
                "10.0.0.1",
                "192.168.0.1",
                "172.16.0.1"
            ],
            correct: ["169.254.1.1"],
            explanation: "APIPA-Adressen liegen im Bereich 169.254.0.0 bis 169.254.255.255 und werden automatisch vergeben, wenn kein DHCP-Server verfügbar ist."
        },
        {
            question: "49. Welche IPv4-Adressen gelten als öffentliche Adressen?",
            answers: [
                "Adressen, die von IANA zugewiesen und im Internet routbar sind.",
                "Adressen im Bereich 10.0.0.0/8.",
                "Adressen im Bereich 172.16.0.0/12.",
                "Adressen im Bereich 192.168.0.0/16."
            ],
            correct: ["Adressen, die von IANA zugewiesen und im Internet routbar sind."],
            explanation: "Öffentliche IP-Adressen werden von IANA zugewiesen und sind im Internet routbar, im Gegensatz zu privaten IP-Adressen."
        },
        {
            question: "50. Welcher IPv4-Befehl fügt eine Route hinzu?",
            answers: [
                "route add",
                "ipconfig",
                "ping",
                "tracert"
            ],
            correct: ["route add"],
            explanation: "Der Befehl 'route add' wird verwendet, um eine neue Route zur Routingtabelle eines Hosts hinzuzufügen."
        },
        {
            question: "51. Was zeigt die Routingtabelle auf einem Computer an?",
            answers: [
                "Die Routen zu verschiedenen Netzwerken und deren Gateways",
                "Die CPU-Auslastung",
                "Alle laufenden Prozesse",
                "Die verfügbare Speicherkapazität"
            ],
            correct: ["Die Routen zu verschiedenen Netzwerken und deren Gateways"],
            explanation: "Eine Routingtabelle enthält Informationen zu den verfügbaren Netzwerken, deren Routen und entsprechenden Gateways."
        },
        {
            question: "52. Welches Tool bietet detaillierte Analysen für jeden Hop in einer Netzwerkroute?",
            answers: [
                "Pathping",
                "Tracert",
                "Ping",
                "Telnet"
            ],
            correct: ["Pathping"],
            explanation: "Pathping kombiniert die Funktionen von Ping und Tracert und bietet detaillierte Informationen über jeden Hop in einer Netzwerkroute."
        },
        {
            question: "53. Welches PowerShell-Cmdlet ermöglicht das Erkennen von Routingproblemen?",
            answers: [
                "Test-NetConnection –TraceRoute",
                "Get-NetAdapter",
                "Set-NetIPAddress",
                "Get-NetIPInterface"
            ],
            correct: ["Test-NetConnection –TraceRoute"],
            explanation: "Das Cmdlet 'Test-NetConnection –TraceRoute' in PowerShell hilft bei der Analyse von Routingpfaden und Netzwerkproblemen."
        },
        {
            question: "54. Wie lässt sich die automatische Konfiguration von IPv4 aktivieren?",
            answers: [
                "Durch das Aktivieren des DHCP-Clients",
                "Durch das manuelle Hinzufügen von Routen",
                "Durch die Verwendung von statischen IP-Adressen",
                "Durch die Eingabe von APIPA-Adressen"
            ],
            correct: ["Durch das Aktivieren des DHCP-Clients"],
            explanation: "Die Aktivierung des DHCP-Clients erlaubt die automatische Zuweisung von IP-Adressen und Netzwerkeinstellungen."
        },
        {
            question: "55. Was ist ein Supernet?",
            answers: [
                "Ein Netzwerk, das aus mehreren zusammenhängenden Subnetzen besteht.",
                "Ein einzelnes Subnetz mit einer großen Anzahl von Hosts.",
                "Ein Netzwerk mit einer festen Anzahl von Hosts.",
                "Ein Netzwerk, das nur private IP-Adressen verwendet."
            ],
            correct: ["Ein Netzwerk, das aus mehreren zusammenhängenden Subnetzen besteht."],
            explanation: "Ein Supernet entsteht, wenn mehrere Subnetze zu einem größeren Netzwerk zusammengefasst werden, um Adressbereiche effizienter zu nutzen."
        },
        {
            question: "56. Welcher IPv4-Adressbereich wird typischerweise für private Netzwerke verwendet?",
            answers: [
                "192.168.0.0/16",
                "8.8.8.0/24",
                "172.15.0.0/12",
                "120.10.10.0/24"
            ],
            correct: ["192.168.0.0/16"],
            explanation: "Der Bereich 192.168.0.0/16 ist für private Netzwerke reserviert und wird nicht im öffentlichen Internet verwendet."
        },
        {
            question: "57. Welches Tool kann für die Analyse von Netzwerkpaketen verwendet werden?",
            answers: [
                "Microsoft Message Analyzer",
                "ipconfig",
                "netstat",
                "pathping"
            ],
            correct: ["Microsoft Message Analyzer"],
            explanation: "Microsoft Message Analyzer ist ein Tool zur Analyse von Netzwerkpaketen und zur Fehlersuche in Netzwerken."
        },
        {
            question: "58. Warum wird die Einführung von IPv6 empfohlen?",
            answers: [
                "Wegen des begrenzten IPv4-Adressraums und des Internetausbaus.",
                "Weil IPv6-Adressen einfacher zu verstehen sind.",
                "IPv6 benötigt keine Routingtabellen.",
                "IPv6 nutzt die gleiche Struktur wie IPv4."
            ],
            correct: ["Wegen des begrenzten IPv4-Adressraums und des Internetausbaus."],
            explanation: "IPv6 bietet eine deutlich größere Adresskapazität, die für das Wachstum des Internets notwendig ist, da IPv4-Adressen fast ausgeschöpft sind."
        },
        {
            question: "59. Welche Verbesserung bietet IPv6 für die Qualität der Datenübertragung?",
            answers: [
                "Unterstützung von Quality of Service (QoS)",
                "Reduzierte Paketgröße",
                "Schnellere Datenverschlüsselung",
                "Verbindung nur über kabelgebundene Netzwerke"
            ],
            correct: ["Unterstützung von Quality of Service (QoS)"],
            explanation: "IPv6 ermöglicht die Priorisierung bestimmter Datenpakete, was für Anwendungen mit hohen Echtzeitanforderungen von Vorteil ist."
        },
        {
            question: "60. Wie viele Bits hat eine IPv6-Adresse?",
            answers: [
                "128 Bits",
                "64 Bits",
                "32 Bits",
                "256 Bits"
            ],
            correct: ["128 Bits"],
            explanation: "IPv6-Adressen haben eine Länge von 128 Bits, was im Vergleich zu den 32-Bit-IPv4-Adressen eine erhebliche Erweiterung darstellt."
        },
        {
            question: "61. Wie sieht die vereinfachte Schreibweise einer IPv6-Adresse aus?",
            answers: [
                "Durch Entfernen der führenden Nullen in jedem 16-Bit-Block",
                "Durch Verwenden von Dezimalzahlen",
                "Durch Hinzufügen zusätzlicher Nullen",
                "Durch Kürzen der Adresse auf 64 Bits"
            ],
            correct: ["Durch Entfernen der führenden Nullen in jedem 16-Bit-Block"],
            explanation: "IPv6-Adressen können durch Entfernen der führenden Nullen in jedem Block vereinfacht werden, um die Lesbarkeit zu verbessern."
        },
        {
            question: "62. Welche Teile hat eine IPv6-Adresse?",
            answers: [
                "Netzwerkpräfix und Schnittstellenbezeichner",
                "Subnetz und Hostanteil",
                "IPv4- und IPv6-Teile",
                "Nur einen Hostanteil"
            ],
            correct: ["Netzwerkpräfix und Schnittstellenbezeichner"],
            explanation: "IPv6-Adressen bestehen aus einem Präfix, das das Netzwerk identifiziert, und einem Schnittstellenbezeichner, der den Host innerhalb des Netzwerks bestimmt."
        },
        {
            question: "63. Welche Adresstypen werden in IPv6 unterstützt?",
            answers: [
                "Unicast, Multicast und Anycast",
                "Broadcast, Anycast und Unicast",
                "Unicast und Broadcast",
                "Nur Unicast"
            ],
            correct: ["Unicast, Multicast und Anycast"],
            explanation: "IPv6 verwendet Unicast für individuelle Adressierung, Multicast für Gruppenadressierung und Anycast, um den nächstgelegenen Host einer Gruppe zu erreichen."
        },
        {
            question: "64. Wofür werden globale Unicast-Adressen in IPv6 verwendet?",
            answers: [
                "Für das Routing im Internet",
                "Für lokale Netzwerke",
                "Für das Senden von Broadcasts",
                "Nur für Multicast-Übertragungen"
            ],
            correct: ["Für das Routing im Internet"],
            explanation: "Globale Unicast-Adressen sind eindeutig und werden verwendet, um IPv6-fähige Geräte im Internet zu identifizieren."
        },
        {
            question: "65. Welche Funktion haben eindeutige lokale Adressen in IPv6?",
            answers: [
                "Sie sind mit privaten IPv4-Adressen vergleichbar.",
                "Sie sind für das globale Internet routingfähig.",
                "Sie unterstützen die QoS-Funktionalität.",
                "Sie dienen nur als Multicast-Adressen."
            ],
            correct: ["Sie sind mit privaten IPv4-Adressen vergleichbar."],
            explanation: "Ähnlich wie private IPv4-Adressen sind eindeutige lokale Adressen in IPv6 für die Verwendung innerhalb eines lokalen Netzwerks gedacht und nicht im Internet routbar."
        },
        {
            question: "66. Was zeichnet verbindungslokale Adressen in IPv6 aus?",
            answers: [
                "Sie werden auf allen IPv6-Hosts automatisch generiert.",
                "Sie benötigen manuelle Konfiguration.",
                "Sie sind global routingfähig.",
                "Sie können nicht für Multicast verwendet werden."
            ],
            correct: ["Sie werden auf allen IPv6-Hosts automatisch generiert."],
            explanation: "Verbindungslokale Adressen sind selbstkonfigurierende Adressen, die für die Kommunikation innerhalb des lokalen Netzwerks verwendet werden."
        },
        {
            question: "67. Welche Autokonfigurationsmethoden sind für IPv6 verfügbar?",
            answers: [
                "SLAAC (Stateless Address Autoconfiguration) und DHCPv6",
                "Nur statische Adresszuweisung",
                "Nur DHCPv4",
                "Keine Autokonfiguration verfügbar"
            ],
            correct: ["SLAAC (Stateless Address Autoconfiguration) und DHCPv6"],
            explanation: "IPv6 unterstützt die automatische Adresszuweisung über SLAAC und DHCPv6, was die Konfiguration in großen Netzwerken vereinfacht."
        },
        {
            question: "68. Welche Informationen kann ein IPv6-Router für die Autokonfiguration bereitstellen?",
            answers: [
                "Präfixe und Routerkonfigurationsinformationen",
                "Nur die Subnetzmaske",
                "Nur die MAC-Adresse",
                "IP-Adressen für IPv4"
            ],
            correct: ["Präfixe und Routerkonfigurationsinformationen"],
            explanation: "Ein IPv6-Router kann Präfixinformationen und andere Netzwerkdaten senden, um eine autokonfigurierte IPv6-Umgebung zu unterstützen."
        },
        {
            question: "69. Warum ist eine Koexistenz von IPv4 und IPv6 notwendig?",
            answers: [
                "Da IPv4- und IPv6-Netzwerke gleichzeitig existieren und interoperieren müssen.",
                "Weil IPv6 nur in privaten Netzwerken verwendet wird.",
                "Weil IPv6 vollständig abwärtskompatibel zu IPv4 ist.",
                "Weil IPv6 nur in zukünftigen Netzwerken unterstützt wird."
            ],
            correct: ["Da IPv4- und IPv6-Netzwerke gleichzeitig existieren und interoperieren müssen."],
            explanation: "Da viele Netzwerke noch IPv4 verwenden, ist die Interoperabilität zwischen IPv4 und IPv6 während der Übergangszeit notwendig."
        },
        {
            question: "70. Welcher Adresstyp wird für IPv4- und IPv6-Kompatibilität verwendet?",
            answers: [
                "Übergangsadressen",
                "Multicast-Adressen",
                "Nur lokale Adressen",
                "Statische IPv6-Adressen"
            ],
            correct: ["Übergangsadressen"],
            explanation: "Übergangsadressen wie IPv4-kompatible und IPv4-abgebildete Adressen helfen bei der Kommunikation zwischen IPv4- und IPv6-Systemen."
        },
        {
            question: "71. Welche IPv6-Adresse wird als globales Adresspräfix für den neuen Standort verwendet?",
            answers: [
                "3FFA:FF2B:4D:A000::/51",
                "2001:0DB8:85A3:0000::/64",
                "FE80::/10",
                "FF00::/8"
            ],
            correct: ["3FFA:FF2B:4D:A000::/51"],
            explanation: "Das Dokument spezifiziert 3FFA:FF2B:4D:A000::/51 als das globale Adresspräfix, das für den neuen Standort verwendet werden soll."
        },
        {
            question: "72. Wie lautet die erweiterte Darstellung der Adresse 3FFA:FF2B:4D:A000::/51?",
            answers: [
                "3FFA:FF2B:004D:A000:0000:0000:0000:0000/51",
                "3FFA:FF2B:0000:0000:0000:0000:0000:0001/51",
                "3FFA:FF2B:4D:A0:0:0:0:1/51",
                "3FFA:FF2B:4D:AFFF:FFFF:FFFF:FFFF:FFFF/51"
            ],
            correct: ["3FFA:FF2B:004D:A000:0000:0000:0000:0000/51"],
            explanation: "In der erweiterten Darstellung wird jedes Segment auf 4 Zeichen erweitert, daher lautet die Adresse 3FFA:FF2B:004D:A000:0000:0000:0000:0000/51."
        },
        {
            question: "73. Welches ist das erste mögliche Subnetz, das vom Adresspräfix 3FFA:FF2B:4D:A000::/51 abgeleitet wird?",
            answers: [
                "3FFA:FF2B:4D:A800::/53",
                "3FFA:FF2B:4D:A000::/53",
                "3FFA:FF2B:4D:B000::/53",
                "3FFA:FF2B:4D:B800::/53"
            ],
            correct: ["3FFA:FF2B:4D:A000::/53"],
            explanation: "Das erste Subnetz, das aus dem Adresspräfix /51 abgeleitet wird, ist 3FFA:FF2B:4D:A000::/53."
        },
        {
            question: "74. Welches IPv6-Subnetz entsteht, wenn das Bitmuster für das dritte Subnetz (B000) verwendet wird?",
            answers: [
                "3FFA:FF2B:4D:A800::/53",
                "3FFA:FF2B:4D:A000::/51",
                "3FFA:FF2B:4D:B000::/53",
                "3FFA:FF2B:4D:B800::/51"
            ],
            correct: ["3FFA:FF2B:4D:B000::/53"],
            explanation: "Das dritte Subnetz mit dem Bitmuster B000 ergibt 3FFA:FF2B:4D:B000::/53."
        },
        {
            question: "75. Was ist das vierte IPv6-Subnetz basierend auf dem Adresspräfix 3FFA:FF2B:4D:A000::/51?",
            answers: [
                "3FFA:FF2B:4D:B800::/53",
                "3FFA:FF2B:4D:A800::/53",
                "3FFA:FF2B:4D:A000::/51",
                "3FFA:FF2B:4D:C000::/53"
            ],
            correct: ["3FFA:FF2B:4D:B800::/53"],
            explanation: "Das vierte Subnetz wird durch das Bitmuster B800 gebildet, daher lautet das Subnetz 3FFA:FF2B:4D:B800::/53."
        },
        {
            question: "76. Welches Betriebssystem wird auf den Servern im Firmennetzwerk verwendet?",
            answers: [
                "Microsoft Windows Server 2016",
                "Microsoft Windows Server 2012",
                "Linux Ubuntu",
                "macOS Server"
            ],
            correct: ["Microsoft Windows Server 2016"],
            explanation: "Laut Dokument ist auf den Servern des Firmennetzwerks Microsoft Windows Server 2016 installiert."
        },
        {
            question: "77. Welche Betriebssystemversion ist auf den Clientcomputern im Firmennetzwerk installiert?",
            answers: [
                "Microsoft Windows 10",
                "Microsoft Windows 8",
                "Linux Mint",
                "macOS Catalina"
            ],
            correct: ["Microsoft Windows 10"],
            explanation: "Laut Dokument verwenden die Clientcomputer das Betriebssystem Microsoft Windows 10."
        },
        {
            question: "78. Wie viele Standorte hat das Unternehmen derzeit, einschließlich der geplanten Erweiterungen?",
            answers: [
                "Drei Standorte",
                "Vier Standorte",
                "Zwei Standorte",
                "Fünf Standorte"
            ],
            correct: ["Vier Standorte"],
            explanation: "Das Unternehmen verfügt derzeit über drei Standorte und plant einen vierten Standort."
        },
        {
            question: "79. Warum ist IPv6 für Unternehmen zunehmend wichtig?",
            answers: [
                "Wegen der IPv4-Ausschöpfung und der Unterstützung für größere Routingtabellen",
                "Weil IPv6 keine Subnetzmasken benötigt",
                "Da IPv6 die einzige Möglichkeit zur Verbindung in privaten Netzwerken ist",
                "Weil IPv6 nur auf mobilen Geräten unterstützt wird"
            ],
            correct: ["Wegen der IPv4-Ausschöpfung und der Unterstützung für größere Routingtabellen"],
            explanation: "IPv6 wird immer wichtiger, da der IPv4-Adressraum ausgeschöpft ist und IPv6 größere Routingtabellen unterstützt."
        },
        {
            question: "80. Welche Länge hat eine IPv6-Adresse?",
            answers: [
                "64 Bit",
                "128 Bit",
                "256 Bit",
                "32 Bit"
            ],
            correct: ["128 Bit"],
            explanation: "IPv6-Adressen sind 128 Bit lang und bieten einen größeren Adressraum als IPv4."
        },
        {
            question: "3. Wie ist die IPv6-Adressenstruktur organisiert?",
            answers: [
                "64 Bits für die Netzwerk-ID und 64 Bits für den Host",
                "48 Bits für die Netzwerk-ID und 80 Bits für den Host",
                "96 Bits für die Netzwerk-ID und 32 Bits für den Host",
                "128 Bits für den Host"
            ],
            correct: ["64 Bits für die Netzwerk-ID und 64 Bits für den Host"],
            explanation: "In der IPv6-Struktur sind 64 Bits für die Netzwerk-ID und 64 Bits für den Host reserviert."
        },
        {
            question: "81. Welche IPv6-Adresstypen gibt es?",
            answers: [
                "Unicast, Multicast und Anycast",
                "Broadcast, Unicast und Multicast",
                "Unicast, Broadcast und Anycast",
                "Anycast, Broadcast und Loopback"
            ],
            correct: ["Unicast, Multicast und Anycast"],
            explanation: "IPv6 verwendet die Adresstypen Unicast, Multicast und Anycast."
        },
        {
            question: "82. Was ist eine IPv6-Global-Unicast-Adresse?",
            answers: [
                "Eine öffentlich routbare Adresse, die mit 2 oder 3 beginnt",
                "Eine private Adresse für lokale Netzwerke",
                "Eine spezielle Adresse für Multicast",
                "Eine temporäre Adresse für Tests"
            ],
            correct: ["Eine öffentlich routbare Adresse, die mit 2 oder 3 beginnt"],
            explanation: "IPv6-Global-Unicast-Adressen sind öffentlich routbar und beginnen oft mit 2000::/3."
        },
        {
            question: "83. Wozu dient eine eindeutige lokale IPv6-Adresse?",
            answers: [
                "Zur Adressierung innerhalb privater Netzwerke, ähnlich wie private IPv4-Adressen",
                "Zur öffentlichen Adressierung im Internet",
                "Nur für den Zugriff auf IPv4-Netzwerke",
                "Nur für Multicast-Kommunikation"
            ],
            correct: ["Zur Adressierung innerhalb privater Netzwerke, ähnlich wie private IPv4-Adressen"],
            explanation: "Eindeutige lokale IPv6-Adressen sind private und für den lokalen Netzwerkverkehr gedacht, ähnlich wie private IPv4-Adressen."
        },
        {
            question: "84. Welche Tools werden zur Konfiguration von IPv6 in Windows genutzt?",
            answers: [
                "Netsh, PowerShell-Cmdlets und TCP/IPv6-Eigenschaften",
                "Ping, Ipconfig und Tracert",
                "SSH, SCP und Telnet",
                "FTP, HTTP und DNS"
            ],
            correct: ["Netsh, PowerShell-Cmdlets und TCP/IPv6-Eigenschaften"],
            explanation: "IPv6 kann in Windows über Netsh, PowerShell-Cmdlets und die TCP/IPv6-Eigenschaften konfiguriert werden."
        },
        {
            question: "85. Welche IPv6-Adressentypen werden automatisch auf Hosts generiert?",
            answers: [
                "Verbindungslokale Adressen",
                "Globale Unicast-Adressen",
                "Eindeutige lokale Adressen",
                "Broadcast-Adressen"
            ],
            correct: ["Verbindungslokale Adressen"],
            explanation: "Verbindungslokale IPv6-Adressen werden automatisch auf allen IPv6-Hosts generiert."
        },
        {
            question: "86. Welche Vorteile bietet die IPv4- und IPv6-Koexistenz?",
            answers: [
                "Ermöglicht die parallele Nutzung und schrittweise Migration zu IPv6",
                "Erhöht die Geschwindigkeit von IPv4-Verbindungen",
                "Ermöglicht IPv6-Adressen in IPv4-Routern",
                "Erfordert keine zusätzliche Konfiguration"
            ],
            correct: ["Ermöglicht die parallele Nutzung und schrittweise Migration zu IPv6"],
            explanation: "IPv4- und IPv6-Koexistenz ermöglicht Unternehmen, IPv6 einzuführen, ohne IPv4 sofort abschalten zu müssen."
        },
        {
            question: "87. Was ist IPv6-über-IPv4-Tunneling?",
            answers: [
                "Eine Methode, um IPv6-Verkehr über ein IPv4-Netzwerk zu senden",
                "Eine Methode zur IPv4-Adressierung im IPv6-Netz",
                "Eine Methode zur Verbesserung der IPv6-Sicherheit",
                "Eine Methode zur Konvertierung von IPv4- in IPv6-Adressen"
            ],
            correct: ["Eine Methode, um IPv6-Verkehr über ein IPv4-Netzwerk zu senden"],
            explanation: "Beim IPv6-über-IPv4-Tunneling wird IPv6-Verkehr in IPv4-Paketen gekapselt, um durch IPv4-Netzwerke zu reisen."
        },
        {
            question: "88. Wofür wird ISATAP (Intra-Site Automatic Tunnel Addressing Protocol) verwendet?",
            answers: [
                "Für die IPv6-Kommunikation über ein IPv4-Intranet",
                "Zur Erhöhung der IPv4-Routing-Kapazität",
                "Für die Zuweisung von privaten IPv4-Adressen",
                "Für die Verschlüsselung von IPv6-Paketen"
            ],
            correct: ["Für die IPv6-Kommunikation über ein IPv4-Intranet"],
            explanation: "ISATAP ermöglicht IPv6-Kommunikation innerhalb eines IPv4-Intranets, indem IPv4-Adressen als Teil der IPv6-Adresse genutzt werden."
        },
        {
            question: "89. Welche IPv6-Technologie ermöglicht NAT-Umgehung durch IPv4-Netzwerke?",
            answers: [
                "Teredo",
                "ISATAP",
                "IP6-zu-IP4",
                "PortProxy"
            ],
            correct: ["Teredo"],
            explanation: "Teredo ermöglicht IPv6-Verbindungen über NAT-Geräte im IPv4-Internet."
        },
        {
            question: "90. Was ist ein IPv6-PortProxy?",
            answers: [
                "Er ermöglicht IPv6-Hosts den Zugriff auf IPv4-Anwendungen",
                "Er bietet verschlüsselte IPv6-Verbindungen",
                "Er wandelt IPv4-Adressen in IPv6-Adressen um",
                "Er verbindet IPv6-Netzwerke direkt mit IPv4-Netzwerken"
            ],
            correct: ["Er ermöglicht IPv6-Hosts den Zugriff auf IPv4-Anwendungen"],
            explanation: "PortProxy erlaubt IPv6-Hosts, auf IPv4-Anwendungen zuzugreifen, indem IPv6-Adressen auf IPv4-Ports abgebildet werden."
        },
        {
            question: "91. Welche Methode dient zur IPv6-Adressauflösung in einem dualen IPv4/IPv6-Netzwerk?",
            answers: [
                "Erstellen von AAAA-Einträgen im DNS",
                "Erstellen von CNAME-Einträgen im DNS",
                "Hinzufügen von MX-Einträgen im DNS",
                "Verwendung von DHCPv6 für alle Geräte"
            ],
            correct: ["Erstellen von AAAA-Einträgen im DNS"],
            explanation: "AAAA-Einträge im DNS ermöglichen die IPv6-Adressauflösung in Netzwerken, die sowohl IPv4 als auch IPv6 unterstützen."
        },
        {
            question: "92. Was ist der Zweck des Übergangs von IPv4 zu IPv6?",
            answers: [
                "Um IPv6 vollständig zu unterstützen, müssen Anwendungen, Router und DNS aktualisiert werden",
                "Um IPv4 abzuschalten und stattdessen MAC-Adressen zu verwenden",
                "Nur zur Umstellung auf ein drahtloses Netzwerk",
                "Zur Reduzierung der Netzwerkgeschwindigkeit"
            ],
            correct: ["Um IPv6 vollständig zu unterstützen, müssen Anwendungen, Router und DNS aktualisiert werden"],
            explanation: "Für den Übergang zu IPv6 ist eine Aktualisierung der Netzwerkgeräte, Anwendungen und des DNS erforderlich, um IPv6-Kommunikation zu ermöglichen."
        },
        {
            question: "93. Welcher Netzbereich soll in Subnetze unterteilt werden?",
            answers: [
                "2001:B6::180:0:0/90",
                "2001:0DB8::/32",
                "FE80::/10",
                "FF00::/8"
            ],
            correct: ["2001:B6::180:0:0/90"],
            explanation: "Der Netzbereich 2001:B6::180:0:0/90 ist der zu unterteilende Bereich, aus dem neue Subnetze gebildet werden sollen."
        },
        {
            question: "94. In wie viele Subnetze soll der Netzbereich 2001:B6::180:0:0/90 unterteilt werden?",
            answers: [
                "5 Subnetze",
                "3 Subnetze",
                "10 Subnetze",
                "7 Subnetze"
            ],
            correct: ["5 Subnetze"],
            explanation: "Laut Aufgabe soll der Netzbereich in genau 5 Subnetze aufgeteilt werden."
        },
        {
            question: "95. Welche Methode wird verwendet, um den Netzbereich in mehrere Subnetze zu unterteilen?",
            answers: [
                "Subnetting",
                "Supernetting",
                "NAT",
                "Tunneling"
            ],
            correct: ["Subnetting"],
            explanation: "Durch Subnetting wird der Netzbereich in kleinere Subnetze aufgeteilt, die jeweils eigene Netzwerkadressen haben."
        },
        {
            question: "96. Wie lautet die Netzwerkadresse des ersten Subnetzes, das aus dem Bereich 2001:B6::180:0:0/90 gebildet wird?",
            answers: [
                "2001:B6::180:0:0/91",
                "2001:B6::180:0:0/90",
                "2001:B6::180:0:0/92",
                "2001:B6::180:0:0/93"
            ],
            correct: ["2001:B6::180:0:0/91"],
            explanation: "Das erste Subnetz hat die Adresse 2001:B6::180:0:0/91, da durch das Subnetting die Präfixlänge um 1 erhöht wird."
        },
        {
            question: "97. Was ist die Netzwerkadresse des zweiten Subnetzes nach der Unterteilung des Bereichs 2001:B6::180:0:0/90?",
            answers: [
                "2001:B6::180:0:2/91",
                "2001:B6::180:0:1/91",
                "2001:B6::180:0:0/91",
                "2001:B6::180:0:4/91"
            ],
            correct: ["2001:B6::180:0:1/91"],
            explanation: "Das zweite Subnetz hat die Netzwerkadresse 2001:B6::180:0:1/91, basierend auf der inkrementellen Erhöhung im Subnetting."
        },
        {
            question: "98. Wie lautet die Netzwerkadresse des dritten Subnetzes aus dem Bereich 2001:B6::180:0:0/90?",
            answers: [
                "2001:B6::180:0:2/91",
                "2001:B6::180:0:1/91",
                "2001:B6::180:0:3/91",
                "2001:B6::180:0:4/91"
            ],
            correct: ["2001:B6::180:0:2/91"],
            explanation: "Die Netzwerkadresse des dritten Subnetzes ist 2001:B6::180:0:2/91, entsprechend der fortlaufenden Adressierung der Subnetze."
        },
        {
            question: "99. Was ist die Netzwerkadresse des vierten Subnetzes nach der Unterteilung des Bereichs 2001:B6::180:0:0/90?",
            answers: [
                "2001:B6::180:0:3/91",
                "2001:B6::180:0:4/91",
                "2001:B6::180:0:1/91",
                "2001:B6::180:0:5/91"
            ],
            correct: ["2001:B6::180:0:3/91"],
            explanation: "Das vierte Subnetz erhält die Adresse 2001:B6::180:0:3/91, basierend auf der fortlaufenden Zuweisung im Subnetting."
        },
        {
            question: "100. Wie lautet die Netzwerkadresse des fünften Subnetzes für den Netzbereich 2001:B6::180:0:0/90?",
            answers: [
                "2001:B6::180:0:4/91",
                "2001:B6::180:0:3/91",
                "2001:B6::180:0:5/91",
                "2001:B6::180:0:6/91"
            ],
            correct: ["2001:B6::180:0:4/91"],
            explanation: "Das fünfte Subnetz hat die Adresse 2001:B6::180:0:4/91, gemäß der inkrementellen Verteilung der Subnetze."
        },
        {
            question: "101. Was ist ein vollqualifizierter Domänenname (Fully Qualified Domain Name, FQDN)?",
            answers: [
                "Ein vollständiger Name bestehend aus Hostname, Domäne und Top-Level-Domäne",
                "Ein Name, der nur aus einer Top-Level-Domäne besteht",
                "Ein zufällig generierter Netzwerkname",
                "Ein Name, der nur den Hostnamen und die Top-Level-Domäne enthält"
            ],
            correct: ["Ein vollständiger Name bestehend aus Hostname, Domäne und Top-Level-Domäne"],
            explanation: "Ein FQDN wie 'AcctDirPC.adatum.com' kombiniert Hostname, Domäne und Top-Level-Domäne."
        },
        {
            question: "102. Welche Hauptkomponenten gehören zur DNS-Infrastruktur?",
            answers: [
                "DNS-Server, DNS-Zonen, DNS-Resolver und Ressourceneinträge",
                "Router, Firewalls, Hostname und Netzwerke",
                "FQDN, TLD und SLD",
                "Nur Netzwerke und Hosts"
            ],
            correct: ["DNS-Server, DNS-Zonen, DNS-Resolver und Ressourceneinträge"],
            explanation: "Die DNS-Infrastruktur umfasst Server, Zonen, Resolver und Ressourceneinträge, die zusammenarbeiten, um Namensauflösungen bereitzustellen."
        },
        {
            question: "103. Was sind DNS-Zonen?",
            answers: [
                "Bestimmte Teile des DNS-Namespace, die DNS-Einträge enthalten",
                "Nur die Top-Level-Domänen des DNS",
                "Die physischen Standorte der DNS-Server",
                "Listen von IP-Adressen, die auf einen Hostnamen verweisen"
            ],
            correct: ["Bestimmte Teile des DNS-Namespace, die DNS-Einträge enthalten"],
            explanation: "Eine DNS-Zone ist ein Bereich im DNS-Namespace, der verschiedene DNS-Einträge wie A, MX und NS enthält."
        },
        {
            question: "104. Welche Zonentypen gibt es in DNS?",
            answers: [
                "Forward-Lookup-Zone und Reverse-Lookup-Zone",
                "Primary-Zone und Secondary-Zone",
                "Only-Read-Zone und Write-Zone",
                "Local-Zone und Global-Zone"
            ],
            correct: ["Forward-Lookup-Zone und Reverse-Lookup-Zone"],
            explanation: "Es gibt Forward-Lookup-Zonen, die Hostnamen auf IP-Adressen abbilden, und Reverse-Lookup-Zonen für die umgekehrte Zuordnung."
        },
        {
            question: "105. Welche Eintragstypen findet man in einer Forward-Lookup-Zone?",
            answers: [
                "A, MX, SRV, NS, SOA und CNAME",
                "PTR, AAAA und TLD",
                "Only-Read und Write",
                "SLD, TLD und A-Records"
            ],
            correct: ["A, MX, SRV, NS, SOA und CNAME"],
            explanation: "In einer Forward-Lookup-Zone findet man Einträge wie A, MX, SRV, NS, SOA und CNAME, die für die Namensauflösung zuständig sind."
        },
        {
            question: "106. Was ist der Zweck eines PTR-Eintrags in einer Reverse-Lookup-Zone?",
            answers: [
                "Um IP-Adressen in Hostnamen aufzulösen",
                "Zur Verwaltung von DNS-Servern",
                "Zum Erstellen eines Alias für eine IP-Adresse",
                "Zum Auflösen von Subnetzen in Zonen"
            ],
            correct: ["Um IP-Adressen in Hostnamen aufzulösen"],
            explanation: "PTR-Einträge werden in Reverse-Lookup-Zonen verwendet, um IP-Adressen in Hostnamen aufzulösen."
        },
        {
            question: "107. Wie installiert und konfiguriert man die DNS-Serverrolle in Windows?",
            answers: [
                "Über die Windows Server-Verwaltungskonsole oder PowerShell",
                "Durch Hinzufügen von Benutzern zur DNS-Admin-Gruppe",
                "Durch Aktivieren der DNS-Optionen im Netzwerkadapter",
                "Durch Ändern der Registry-Einstellungen"
            ],
            correct: ["Über die Windows Server-Verwaltungskonsole oder PowerShell"],
            explanation: "Die DNS-Serverrolle kann in Windows über die Verwaltungskonsole oder PowerShell installiert und konfiguriert werden."
        },
        {
            question: "108. Welche Befehlszeilentools helfen bei der DNS-Problembehandlung?",
            answers: [
                "Nslookup, DNSCmd, DNSlint und Ipconfig",
                "Ping, Tracert, Pathping und Telnet",
                "Netsh, Set-Location und Diskpart",
                "Get-Service, Get-Process und Test-Connection"
            ],
            correct: ["Nslookup, DNSCmd, DNSlint und Ipconfig"],
            explanation: "Tools wie Nslookup, DNSCmd, DNSlint und Ipconfig sind nützlich für die DNS-Problembehandlung."
        },
        {
            question: "109. Wie funktioniert die DNS-Namensauflösung?",
            answers: [
                "Sie übersetzt Hostnamen in IP-Adressen und umgekehrt.",
                "Sie erstellt neue IP-Adressen für Hosts.",
                "Sie aktualisiert die Netzwerkkonfiguration automatisch.",
                "Sie ändert die MAC-Adresse eines Hosts."
            ],
            correct: ["Sie übersetzt Hostnamen in IP-Adressen und umgekehrt."],
            explanation: "DNS übersetzt Hostnamen in IP-Adressen, um den Zugriff auf Netzwerke und Ressourcen zu erleichtern."
        },
        {
            question: "110. Was sind primäre und sekundäre DNS-Zonen?",
            answers: [
                "Primäre Zonen sind beschreibbar, sekundäre Zonen sind schreibgeschützt",
                "Sekundäre Zonen verwalten die primären Zonen",
                "Primäre Zonen können nur gelesen werden",
                "Sekundäre Zonen sind die Master-Zonen"
            ],
            correct: ["Primäre Zonen sind beschreibbar, sekundäre Zonen sind schreibgeschützt"],
            explanation: "Primäre DNS-Zonen sind beschreibbar und enthalten die Originaleinträge, während sekundäre Zonen Kopien für Redundanz und Ausfallsicherheit bieten."
        },
        {
            question: "111. Welche Rolle spielt DNS-Caching in der Namensauflösung?",
            answers: [
                "Es speichert bereits aufgelöste Namen lokal, um Anfragen zu beschleunigen.",
                "Es überprüft die Integrität von IP-Adressen.",
                "Es speichert MAC-Adressen.",
                "Es aktualisiert ständig die Routingtabellen."
            ],
            correct: ["Es speichert bereits aufgelöste Namen lokal, um Anfragen zu beschleunigen."],
            explanation: "DNS-Caching speichert kürzlich aufgelöste Namen lokal, was die Geschwindigkeit der Namensauflösung bei wiederholten Anfragen erhöht."
        },
        {
            question: "112. Was versteht man unter DNS-Weiterleitung?",
            answers: [
                "Das Weiterleiten von Anfragen an andere DNS-Server, wenn der lokale Server keine Antwort hat",
                "Das Löschen aller DNS-Einträge",
                "Die automatische Erneuerung von DNS-Einträgen",
                "Die Überwachung von DNS-Servern"
            ],
            correct: ["Das Weiterleiten von Anfragen an andere DNS-Server, wenn der lokale Server keine Antwort hat"],
            explanation: "DNS-Weiterleitung leitet Anfragen an einen anderen DNS-Server weiter, falls der lokale Server die Anfrage nicht auflösen kann."
        },
        {
            question: "113. Wofür wird eine Stubzone in DNS verwendet?",
            answers: [
                "Zum Erstellen einer Kopie der Nameserver-Informationen einer anderen Zone",
                "Zum Speichern aller IP-Adressen in einer Zone",
                "Zum Blockieren von DNS-Anfragen",
                "Zum Konfigurieren von DHCP-Optionen"
            ],
            correct: ["Zum Erstellen einer Kopie der Nameserver-Informationen einer anderen Zone"],
            explanation: "Stubzonen enthalten Informationen über Nameserver in anderen Zonen und helfen dabei, Anfragen an die richtige Zone zu leiten."
        },
        {
            question: "114. Welche PowerShell-Cmdlets sind für die DNS-Fehlerbehebung hilfreich?",
            answers: [
                "Get-DnsServerStatistics, Test-DnsServer, Resolve-DnsName",
                "New-Item, Set-Content, Get-Process",
                "Get-Mailbox, Test-Service, Get-Service",
                "Ping, Tracert, Netstat"
            ],
            correct: ["Get-DnsServerStatistics, Test-DnsServer, Resolve-DnsName"],
            explanation: "Cmdlets wie Get-DnsServerStatistics, Test-DnsServer und Resolve-DnsName unterstützen die Fehlerbehebung und Analyse von DNS-Servern."
        },
        {
            question: "115. Wie kann die Überwachung eines DNS-Servers konfiguriert werden?",
            answers: [
                "Über die Registerkarte 'Überwachung' in der DNS-Konsole oder PowerShell",
                "Nur durch regelmäßige Neustarts",
                "Durch das Deaktivieren der DNS-Dienste",
                "Durch Ändern der IP-Adresse des DNS-Servers"
            ],
            correct: ["Über die Registerkarte 'Überwachung' in der DNS-Konsole oder PowerShell"],
            explanation: "In der Registerkarte 'Überwachung' oder über PowerShell können Überwachungsoptionen wie einfache und rekursive Abfragen konfiguriert werden."
        },
        {
                question: "116. Wofür steht DNS?",
                answers: [
                    "Domain Name System",
                    "Digital Network System",
                    "Dynamic Network Service",
                    "Domain Naming Service"
                ],
                correct: ["Domain Name System"],
                explanation: "DNS steht für Domain Name System und ermöglicht die Namensauflösung von Hostnamen zu IP-Adressen."
            },
            {
                question: "117. Was ist die Hauptaufgabe des DNS?",
                answers: [
                    "Namensauflösung von Hostnamen zu IP-Adressen",
                    "Zuweisung von MAC-Adressen",
                    "Sicherheitsüberwachung",
                    "Verbindungsüberwachung"
                ],
                correct: ["Namensauflösung von Hostnamen zu IP-Adressen"],
                explanation: "DNS ermöglicht die Zuordnung von Hostnamen zu IP-Adressen, was die Navigation im Internet erleichtert."
            },
            {
                question: "118. Welche Anfragearten werden im DNS verwendet?",
                answers: [
                    "Iterative und rekursive Anfragen",
                    "Einmalige Anfragen",
                    "Direkte und indirekte Anfragen",
                    "Namentliche Anfragen"
                ],
                correct: ["Iterative und rekursive Anfragen"],
                explanation: "DNS verwendet iterative Anfragen, bei denen ein Server eine Teillösung liefert, und rekursive Anfragen, die bis zur Lösung weitergeleitet werden."
            },
            {
                question: "119. Was ist eine DNS-Zone?",
                answers: [
                    "Ein Teilbereich einer Domain, der auf andere Nameserver delegiert wird.",
                    "Die gesamte Datenbank aller Domains.",
                    "Ein Protokoll zur Datenverschlüsselung.",
                    "Eine IP-Adresse im DNS-System."
                ],
                correct: ["Ein Teilbereich einer Domain, der auf andere Nameserver delegiert wird."],
                explanation: "Eine Zone ist ein Bereich einer Domain, der bestimmten Nameservern zur Verwaltung zugeordnet ist."
            },
            {
                question: "120. Was enthält der SOA (Start of Authority) Eintrag?",
                answers: [
                    "Wichtige Verwaltungsinformationen einer DNS-Zone.",
                    "Nur die IP-Adressen aller Hosts.",
                    "Die physische Adresse des Servers.",
                    "Den Standort des Servers."
                ],
                correct: ["Wichtige Verwaltungsinformationen einer DNS-Zone."],
                explanation: "Der SOA-Eintrag enthält Verwaltungsdetails, die festlegen, wie oft Aktualisierungen und Abfragen erfolgen."
            },
            {
                question: "121. Wofür steht der Serial im SOA Eintrag?",
                answers: [
                    "Er gibt an, ob sich das Zonefile geändert hat.",
                    "Er zeigt die Bandbreite an.",
                    "Er ist der Speicherort des DNS-Servers.",
                    "Er steht für die Netzwerkgeschwindigkeit."
                ],
                correct: ["Er gibt an, ob sich das Zonefile geändert hat."],
                explanation: "Der Serial gibt an, ob das Zonefile aktualisiert wurde. Eine erhöhte Seriennummer zeigt Änderungen an."
            },
            {
                question: "122. Was ist ein NS-Record im DNS?",
                answers: [
                    "Ein Eintrag, der den autoritativen Nameserver für eine Domain angibt.",
                    "Ein Eintrag, der den Mailserver festlegt.",
                    "Ein Eintrag, der die Subnetzmaske definiert.",
                    "Ein Eintrag, der die IP-Adresse des Routers angibt."
                ],
                correct: ["Ein Eintrag, der den autoritativen Nameserver für eine Domain angibt."],
                explanation: "Ein NS-Record legt den autoritativen Nameserver für eine Domain fest."
            },
            {
                question: "123. Wofür wird ein A-Record verwendet?",
                answers: [
                    "Zur Verknüpfung eines Hostnamens mit einer IP-Adresse.",
                    "Zur Zuordnung eines MAC-Adresse mit einem Hostnamen.",
                    "Zum Erstellen einer E-Mail-Adresse.",
                    "Zum Definieren eines DNS-Servers."
                ],
                correct: ["Zur Verknüpfung eines Hostnamens mit einer IP-Adresse."],
                explanation: "Ein A-Record weist einem Hostnamen eine spezifische IP-Adresse zu."
            },
            {
                question: "124. Was zeigt ein MX-Record an?",
                answers: [
                    "Den Mailserver einer Domain.",
                    "Die maximale Bandbreite des Netzwerks.",
                    "Den Primärserver für die Datenbank.",
                    "Den Hauptrouter im Netzwerk."
                ],
                correct: ["Den Mailserver einer Domain."],
                explanation: "Ein MX-Record definiert den Mailserver für eine Domain und kann Prioritäten festlegen."
            },
            {
                question: "125. Was ist ein CNAME (Canonical Name)?",
                answers: [
                    "Ein Aliasname, der auf einen anderen Hostnamen verweist.",
                    "Der Hauptname des DNS-Servers.",
                    "Eine IP-Adresse für mehrere Hosts.",
                    "Ein alternatives Protokoll für DNS."
                ],
                correct: ["Ein Aliasname, der auf einen anderen Hostnamen verweist."],
                explanation: "CNAMEs sind Aliasnamen, die eine Domain auf einen anderen Hostnamen verweisen lassen."
            },
            {
                question: "126. Was macht ein PTR-Record?",
                answers: [
                    "Weist eine IP-Adresse einem Host zu.",
                    "Definiert den sekundären DNS-Server.",
                    "Leitet Anfragen an den Root-Server weiter.",
                    "Erstellt eine statische Route."
                ],
                correct: ["Weist eine IP-Adresse einem Host zu."],
                explanation: "PTR-Records werden im Reverse-DNS verwendet, um eine IP-Adresse einem Hostnamen zuzuordnen."
            },
            {
                question: "127. Was ist ein SRV-Record?",
                answers: [
                    "Ein Eintrag für einen spezifischen Dienst auf einem Host.",
                    "Ein Eintrag für den Sekundärserver.",
                    "Ein Eintrag für die Bandbreite des Netzwerks.",
                    "Ein Eintrag zur Identifikation von Domain-Varianten."
                ],
                correct: ["Ein Eintrag für einen spezifischen Dienst auf einem Host."],
                explanation: "Ein SRV-Record spezifiziert, welcher Host einen bestimmten Dienst, wie z.B. LDAP, anbietet."
            },
            {
                question: "128. Wofür steht TTL (Time To Live) im DNS?",
                answers: [
                    "Gibt die Zeit an, wie lange eine DNS-Antwort gecacht werden darf.",
                    "Zeigt die Replikationsdauer im Netzwerk an.",
                    "Legt die Gültigkeit einer Domain fest.",
                    "Definiert die Netzwerkgeschwindigkeit."
                ],
                correct: ["Gibt die Zeit an, wie lange eine DNS-Antwort gecacht werden darf."],
                explanation: "TTL bestimmt, wie lange eine DNS-Antwort in einem Cache verbleiben darf, bevor sie erneuert wird."
            },
            {
                question: "129. Was ist eine Forward-Lookup-Zone?",
                answers: [
                    "Eine Zone, die Hostnamen in IP-Adressen auflöst.",
                    "Eine Zone, die IP-Adressen in Hostnamen auflöst.",
                    "Eine Zone, die nur Mailserver auflöst.",
                    "Eine Zone, die nur lokale Netzwerke auflöst."
                ],
                correct: ["Eine Zone, die Hostnamen in IP-Adressen auflöst."],
                explanation: "Forward-Lookup-Zonen übersetzen Hostnamen in IP-Adressen, was bei DNS-Anfragen üblich ist."
            },
            {
                question: "130. Was ist eine Reverse-Lookup-Zone?",
                answers: [
                    "Eine Zone, die IP-Adressen in Hostnamen auflöst.",
                    "Eine Zone, die Hostnamen in IP-Adressen auflöst.",
                    "Eine Zone für Mailserver.",
                    "Eine Zone nur für lokale Anfragen."
                ],
                correct: ["Eine Zone, die IP-Adressen in Hostnamen auflöst."],
                explanation: "Reverse-Lookup-Zonen sind das Gegenteil von Forward-Lookup-Zonen und wandeln IP-Adressen in Hostnamen um."
            },
            {
                question: "131. Was ist eine Stubzone?",
                answers: [
                    "Eine partielle Kopie einer Zone, die nur NS- und A-Records enthält.",
                    "Eine vollständige Kopie der DNS-Zone.",
                    "Eine Zone nur für öffentliche Anfragen.",
                    "Eine Zone ohne autoritative Rechte."
                ],
                correct: ["Eine partielle Kopie einer Zone, die nur NS- und A-Records enthält."],
                explanation: "Stubzonen enthalten nur die notwendigsten Informationen, um Anfragen weiterzuleiten."
            },
            {
                question: "132. Was versteht man unter einer rekursiven DNS-Anfrage?",
                answers: [
                    "Eine Anfrage, die von einem Server zum nächsten weitergeleitet wird, bis die Antwort gefunden wird.",
                    "Eine direkte Antwort auf eine Anfrage.",
                    "Eine Anfrage nur innerhalb eines lokalen Netzwerks.",
                    "Eine Anfrage, die nur IP-Adressen auflösen kann."
                ],
                correct: ["Eine Anfrage, die von einem Server zum nächsten weitergeleitet wird, bis die Antwort gefunden wird."],
                explanation: "Bei rekursiven Anfragen wird eine Anfrage an andere DNS-Server weitergeleitet, bis die endgültige Antwort gefunden wird."
            },
            {
                question: "133. Was bedeutet DNSSEC?",
                answers: [
                    "Domain Name System Security Extensions",
                    "Domain Name Standard Extension",
                    "Dynamic Network Service Enhancement",
                    "Domain Name Security Controls"
                ],
                correct: ["Domain Name System Security Extensions"],
                explanation: "DNSSEC ist eine Sicherheitsverbesserung, die die Authentizität und Integrität von DNS-Daten gewährleistet."
            },
        {
            question: "134. Was ist der Zweck der DNS-Namensauflösung?",
            answers: [
                "Um Hostnamen in IP-Adressen aufzulösen und umgekehrt",
                "Um IP-Adressen in MAC-Adressen aufzulösen",
                "Um Servernamen in DNS-Zonen zu speichern",
                "Um DNS-Protokolle zu überwachen"
            ],
            correct: ["Um Hostnamen in IP-Adressen aufzulösen und umgekehrt"],
            explanation: "Die DNS-Namensauflösung ermöglicht die Übersetzung von Hostnamen in IP-Adressen, was für die Kommunikation im Netzwerk notwendig ist."
        },
        {
            question: "135. Was ist ein vollqualifizierter Domänenname (Fully Qualified Domain Name, FQDN)?",
            answers: [
                "Ein vollständiger Name bestehend aus Hostname, Domäne und Top-Level-Domäne",
                "Ein Name, der nur aus einer Top-Level-Domäne besteht",
                "Ein zufällig generierter Netzwerkname",
                "Ein Name, der nur den Hostnamen und die Top-Level-Domäne enthält"
            ],
            correct: ["Ein vollständiger Name bestehend aus Hostname, Domäne und Top-Level-Domäne"],
            explanation: "Ein FQDN wie 'AcctDirPC.adatum.com' kombiniert Hostname, Domäne und Top-Level-Domäne."
        },
        {
            question: "136. Welche Hauptkomponenten gehören zur DNS-Infrastruktur?",
            answers: [
                "DNS-Server, DNS-Zonen, DNS-Resolver und Ressourceneinträge",
                "Router, Firewalls, Hostname und Netzwerke",
                "FQDN, TLD und SLD",
                "Nur Netzwerke und Hosts"
            ],
            correct: ["DNS-Server, DNS-Zonen, DNS-Resolver und Ressourceneinträge"],
            explanation: "Die DNS-Infrastruktur umfasst Server, Zonen, Resolver und Ressourceneinträge, die zusammenarbeiten, um Namensauflösungen bereitzustellen."
        },
        {
            question: "137. Was sind DNS-Zonen?",
            answers: [
                "Bestimmte Teile des DNS-Namespace, die DNS-Einträge enthalten",
                "Nur die Top-Level-Domänen des DNS",
                "Die physischen Standorte der DNS-Server",
                "Listen von IP-Adressen, die auf einen Hostnamen verweisen"
            ],
            correct: ["Bestimmte Teile des DNS-Namespace, die DNS-Einträge enthalten"],
            explanation: "Eine DNS-Zone ist ein Bereich im DNS-Namespace, der verschiedene DNS-Einträge wie A, MX und NS enthält."
        },
        {
            question: "138. Welche Arten von DNS-Zonen gibt es?",
            answers: [
                "Forward-Lookup-Zone und Reverse-Lookup-Zone",
                "Primary-Zone und Secondary-Zone",
                "Only-Read-Zone und Write-Zone",
                "Local-Zone und Global-Zone"
            ],
            correct: ["Forward-Lookup-Zone und Reverse-Lookup-Zone"],
            explanation: "Forward-Lookup-Zonen ordnen Hostnamen IP-Adressen zu, während Reverse-Lookup-Zonen IP-Adressen in Hostnamen auflösen."
        },
        {
            question: "139. Welche Eintragstypen findet man in einer Forward-Lookup-Zone?",
            answers: [
                "A, MX, SRV, NS, SOA und CNAME",
                "PTR, AAAA und TLD",
                "Only-Read und Write",
                "SLD, TLD und A-Records"
            ],
            correct: ["A, MX, SRV, NS, SOA und CNAME"],
            explanation: "In einer Forward-Lookup-Zone findet man Einträge wie A, MX, SRV, NS, SOA und CNAME, die für die Namensauflösung zuständig sind."
        },
        {
            question: "140. Welche Rolle spielen primäre und sekundäre DNS-Zonen?",
            answers: [
                "Primäre Zonen sind beschreibbar, sekundäre Zonen sind schreibgeschützt",
                "Sekundäre Zonen verwalten die primären Zonen",
                "Primäre Zonen können nur gelesen werden",
                "Sekundäre Zonen sind die Master-Zonen"
            ],
            correct: ["Primäre Zonen sind beschreibbar, sekundäre Zonen sind schreibgeschützt"],
            explanation: "Primäre Zonen enthalten die Originaleinträge und sind beschreibbar, während sekundäre Zonen Kopien für Redundanz und Ausfallsicherheit bieten."
        },
        {
            question: "141. Was ist ein PTR-Eintrag und wofür wird er verwendet?",
            answers: [
                "Zur Umkehrung der Namensauflösung von IP zu Hostname",
                "Zur Bereitstellung eines Alias für einen Host",
                "Zum Anzeigen der Routingtabelle",
                "Zum Übersetzen von MAC-Adressen"
            ],
            correct: ["Zur Umkehrung der Namensauflösung von IP zu Hostname"],
            explanation: "PTR-Einträge werden in Reverse-Lookup-Zonen verwendet, um IP-Adressen in Hostnamen aufzulösen."
        },
        {
            question: "142. Was ist DNS-Caching?",
            answers: [
                "Das lokale Speichern aufgelöster Namen zur Beschleunigung zukünftiger Anfragen",
                "Die automatische DNS-Eintragung neuer Hosts",
                "Das Speichern von MAC-Adressen",
                "Das Erstellen eines neuen Nameservers"
            ],
            correct: ["Das lokale Speichern aufgelöster Namen zur Beschleunigung zukünftiger Anfragen"],
            explanation: "DNS-Caching speichert kürzlich aufgelöste Namen, um die Geschwindigkeit bei wiederholten Anfragen zu erhöhen."
        },
        {
            question: "143. Was versteht man unter DNS-Weiterleitung?",
            answers: [
                "Das Weiterleiten von Anfragen an andere DNS-Server, wenn der lokale Server keine Antwort hat",
                "Das Löschen aller DNS-Einträge",
                "Die automatische Erneuerung von DNS-Einträgen",
                "Die Überwachung von DNS-Servern"
            ],
            correct: ["Das Weiterleiten von Anfragen an andere DNS-Server, wenn der lokale Server keine Antwort hat"],
            explanation: "DNS-Weiterleitung leitet Anfragen an einen anderen DNS-Server weiter, falls der lokale Server die Anfrage nicht auflösen kann."
        },
        {
            question: "144. Was sind SRV-Ressourceneinträge und wie werden sie verwendet?",
            answers: [
                "Zur Lokalisierung von Diensten wie LDAP und AD DS",
                "Zur Bereitstellung eines DNS-Caches",
                "Zur Konvertierung von MAC-Adressen in IP-Adressen",
                "Zur Erstellung neuer DNS-Zonen"
            ],
            correct: ["Zur Lokalisierung von Diensten wie LDAP und AD DS"],
            explanation: "SRV-Einträge ermöglichen es, Serverdienste wie LDAP und Active Directory Domain Services in DNS zu lokalisieren."
        },
        {
            question: "145. Was sind Active Directory-integrierte Zonen?",
            answers: [
                "Zonen, die in AD DS integriert sind und sichere Updates ermöglichen",
                "Nur lesbare DNS-Zonen",
                "Eine Art von dynamischer DHCP-Zuweisung",
                "Temporäre Speicherorte für DNS-Abfragen"
            ],
            correct: ["Zonen, die in AD DS integriert sind und sichere Updates ermöglichen"],
            explanation: "Active Directory-integrierte Zonen verwenden AD DS zur Replikation und bieten sichere, dynamische Updates."
        },
        {
            question: "146. Was ist die Funktion der GlobalNames-Zone?",
            answers: [
                "Ermöglicht die Auflösung von einheitlichen Namen über verschiedene DNS-Domänen hinweg",
                "Erstellt dynamisch IP-Adressen für neue Hosts",
                "Speichert CNAME-Einträge nur für lokale Netzwerke",
                "Nur zur Konfiguration von internen Hostnamen"
            ],
            correct: ["Ermöglicht die Auflösung von einheitlichen Namen über verschiedene DNS-Domänen hinweg"],
            explanation: "Die GlobalNames-Zone ermöglicht die Auflösung von einheitlichen Namen in Umgebungen mit mehreren DNS-Domänen."
        },
        {
            question: "147. Was bedeutet DNSSEC?",
            answers: [
                "Ein Sicherheitsprotokoll, das die Authentizität von DNS-Daten sicherstellt",
                "Ein Standard zum Verwalten von DHCP-Einträgen",
                "Eine Methode zur dynamischen DNS-Aktualisierung",
                "Ein Tool zur IP-Adresszuweisung"
            ],
            correct: ["Ein Sicherheitsprotokoll, das die Authentizität von DNS-Daten sicherstellt"],
            explanation: "DNSSEC stellt die Authentizität und Integrität von DNS-Daten sicher, indem es digitale Signaturen für DNS-Zonen verwendet."
        },
        {
            question: "148. Wie kann DNS auf einem Nano-Server implementiert werden?",
            answers: [
                "Durch das Installieren eines speziellen NanoServer-DNS-Pakets",
                "Durch den Start des DNS-Managers auf dem Server",
                "Durch das Konfigurieren von DNS im BIOS",
                "Durch manuelles Hinzufügen von DNS-Cache"
            ],
            correct: ["Durch das Installieren eines speziellen NanoServer-DNS-Pakets"],
            explanation: "Um DNS auf einem Nano-Server zu implementieren, muss das NanoServer-DNS-Paket installiert und über Hyper-V konfiguriert werden."
        },
        {
            question: "149. Wofür steht DHCP?",
            answers: [
                "Dynamic Host Configuration Protocol",
                "Domain Host Configuration Protocol",
                "Direct Host Communication Protocol",
                "Dynamic Hardware Configuration Protocol"
            ],
            correct: ["Dynamic Host Configuration Protocol"],
            explanation: "DHCP steht für Dynamic Host Configuration Protocol und automatisiert die Zuweisung von IP-Adressen an Netzwerkgeräte."
        },
        {
            question: "150. Was ist der Hauptvorteil der Verwendung von DHCP?",
            answers: [
                "Automatische IP-Konfiguration reduziert den administrativen Aufwand.",
                "Es bietet höhere Sicherheit.",
                "Es erhöht die Bandbreite.",
                "Es verhindert DNS-Konflikte."
            ],
            correct: ["Automatische IP-Konfiguration reduziert den administrativen Aufwand."],
            explanation: "DHCP vereinfacht die Netzwerkverwaltung, indem es automatisch IP-Adressen und andere Netzwerkeinstellungen an Clients zuweist."
        },
        
        // Questions on DHCP Lease Process
        {
            question: "151. Wie funktioniert der DHCP-Lease-Prozess?",
            answers: [
                "Der Client sendet ein DHCPDISCOVER, der Server antwortet mit einem DHCPOFFER.",
                "Der Server sendet ein DHCPREQUEST und der Client antwortet mit einem DHCPACK.",
                "Der Client sendet ein DHCPACK, der Server antwortet mit einem DHCPDISCOVER.",
                "Der Client sendet ein DHCPOFFER, der Server antwortet mit einem DHCPREQUEST."
            ],
            correct: ["Der Client sendet ein DHCPDISCOVER, der Server antwortet mit einem DHCPOFFER."],
            explanation: "Im Lease-Prozess sendet der Client ein DHCPDISCOVER, woraufhin der Server ein DHCPOFFER sendet. Der Client bestätigt mit DHCPREQUEST, und der Server finalisiert mit DHCPACK."
        },
        {
            question: "151. Wann beginnt der DHCP-Leaseerneuerungsprozess?",
            answers: [
                "Nach 50% der Leasedauer.",
                "Nach 100% der Leasedauer.",
                "Nach 75% der Leasedauer.",
                "Nach 25% der Leasedauer."
            ],
            correct: ["Nach 50% der Leasedauer."],
            explanation: "Der Client versucht die Lease nach 50% der Leasedauer zu erneuern. Wenn dies fehlschlägt, versucht er es erneut bei 87,5%."
        },
        
        // Questions on DHCP Server Installation and Configuration
        {
            question: "152. Welche Schritte sind für die Installation der DHCP-Serverrolle erforderlich?",
            answers: [
                "Rollen- und Feature-Assistenten verwenden oder PowerShell-Befehl 'Add-WindowsFeature DHCP'.",
                "Den DNS-Server installieren.",
                "Firewall deaktivieren und Router konfigurieren.",
                "DHCP-Dienst manuell starten."
            ],
            correct: ["Rollen- und Feature-Assistenten verwenden oder PowerShell-Befehl 'Add-WindowsFeature DHCP'."],
            explanation: "Die DHCP-Serverrolle kann mit dem Assistenten im Server-Manager oder PowerShell installiert werden. Der Server benötigt eine statische IP-Adresse."
        },
        {
            question: "153. Was ist die Aufgabe der DHCP-Serverautorisierung?",
            answers: [
                "Sie erlaubt DHCP-Servern IP-Adressen in einer AD-Umgebung bereitzustellen.",
                "Sie erhöht die Geschwindigkeit des Netzwerks.",
                "Sie erstellt Benutzergruppen.",
                "Sie ermöglicht DNS-Anfragen."
            ],
            correct: ["Sie erlaubt DHCP-Servern IP-Adressen in einer AD-Umgebung bereitzustellen."],
            explanation: "Die Autorisierung in Active Directory verhindert, dass nicht autorisierte Server IP-Adressen vergeben."
        },
    
        // Questions on DHCP Options and Configuration
        {
            question: "154. Welche Informationen kann ein DHCP-Bereich enthalten?",
            answers: [
                "IP-Adressenbereich, Subnetzmaske, Leasedauer, Gateway und DNS-Server.",
                "Nur IP-Adressen und Subnetzmaske.",
                "MAC-Adressen der verbundenen Geräte.",
                "Passwörter und Benutzerrechte."
            ],
            correct: ["IP-Adressenbereich, Subnetzmaske, Leasedauer, Gateway und DNS-Server."],
            explanation: "Ein DHCP-Bereich umfasst Konfigurationsdaten wie IP-Bereich, Subnetzmaske, Lease-Dauer und zusätzliche Netzwerkeinstellungen."
        },
        {
            question: "155. Was sind DHCP-Optionen?",
            answers: [
                "Werte für häufig verwendete Konfigurationsdaten wie Gateway und DNS.",
                "Sicherheitsprotokolle.",
                "Einstellungen für die Internetgeschwindigkeit.",
                "Einstellungen für Bandbreitenmanagement."
            ],
            correct: ["Werte für häufig verwendete Konfigurationsdaten wie Gateway und DNS."],
            explanation: "DHCP-Optionen bieten flexible Konfigurationsdaten und können auf verschiedenen Ebenen wie Server, Bereich und Reservierung festgelegt werden."
        },
        {
            question: "156. Was ist ein DHCP-Relay-Agent?",
            answers: [
                "Ein Agent, der DHCP-Broadcasts über Subnetze weiterleitet.",
                "Ein Server, der DHCP-Optionen speichert.",
                "Ein Tool zur Serververwaltung.",
                "Ein Protokoll zur Bandbreitenkontrolle."
            ],
            correct: ["Ein Agent, der DHCP-Broadcasts über Subnetze weiterleitet."],
            explanation: "Ein DHCP-Relay-Agent leitet DHCP-Anfragen von Clients in verschiedenen Subnetzen an DHCP-Server weiter."
        },
    
        // Questions on DHCP High Availability and Failover
        {
            question: "157. Was ist DHCP-Failover?",
            answers: [
                "Eine Methode, um IP-Adressen von zwei DHCP-Servern bereitzustellen.",
                "Ein Tool zur Überwachung der Netzwerkgeschwindigkeit.",
                "Ein Verfahren zur Überprüfung der IP-Adressen.",
                "Ein Programm zur Fehlerbehebung im Netzwerk."
            ],
            correct: ["Eine Methode, um IP-Adressen von zwei DHCP-Servern bereitzustellen."],
            explanation: "Mit DHCP-Failover können zwei Server IP-Adressen bereitstellen und so eine höhere Ausfallsicherheit im Netzwerk gewährleisten."
        },
        {
            question: "158. Welche Failover-Modi unterstützt DHCP?",
            answers: [
                "Hot-Standby und Lastverteilung.",
                "Synchronisation und Redundanz.",
                "Backup und Restore.",
                "NAT und PAT."
            ],
            correct: ["Hot-Standby und Lastverteilung."],
            explanation: "Der Hot-Standby-Modus ermöglicht die Übernahme durch einen zweiten Server, während Lastverteilung die IP-Bereitstellung teilt."
        },
    
        // Questions on DHCP Database and Migration
        {
            question: "159. Was speichert die DHCP-Datenbank?",
            answers: [
                "Informationen zu Bereichen, Leases, Reservierungen und Konfigurationen.",
                "Nutzerdaten und Passwörter.",
                "Verbindungsprotokolle.",
                "Firewall-Einstellungen."
            ],
            correct: ["Informationen zu Bereichen, Leases, Reservierungen und Konfigurationen."],
            explanation: "Die DHCP-Datenbank enthält alle wichtigen Informationen zur DHCP-Konfiguration und zu Lease-Zuweisungen."
        },
        {
            question: "160. Wie kann die DHCP-Datenbank migriert werden?",
            answers: [
                "Export der Daten auf dem alten Server und Import auf dem neuen Server.",
                "Durch die Deinstallation und Neuinstallation des Dienstes.",
                "Durch Kopieren des gesamten Systemverzeichnisses.",
                "Durch Neustarten des Netzwerks."
            ],
            correct: ["Export der Daten auf dem alten Server und Import auf dem neuen Server."],
            explanation: "Die Migration erfolgt durch Export der DHCP-Daten vom alten Server und Import der Daten auf dem neuen Server."
        },
    
        // Questions on DHCP Security Options
        {
            question: "161. Was sind DHCP-Sicherheitsoptionen?",
            answers: [
                "Maßnahmen wie Netzwerkzugriffsbeschränkungen und DHCP-Überwachung.",
                "Einstellungen für höhere Bandbreite.",
                "Optionen zur Beschleunigung der DHCP-Antwortzeit.",
                "Optionen zur Erhöhung der Verbindungszahl."
            ],
            correct: ["Maßnahmen wie Netzwerkzugriffsbeschränkungen und DHCP-Überwachung."],
            explanation: "DHCP-Sicherheitsoptionen verhindern unbefugten Zugriff und schützen die Integrität des Netzwerks."
        },
        {
            question: "161. Was ist der DHCP-Namensschutz?",
            answers: [
                "Schützt die DNS-Namensregistrierung von Windows-Clients.",
                "Verhindert Änderungen an IP-Adressen.",
                "Blockiert den Zugang zu bestimmten Websites.",
                "Erhöht die Netzwerksicherheit durch Passwortschutz."
            ],
            correct: ["Schützt die DNS-Namensregistrierung von Windows-Clients."],
            explanation: "Der DHCP-Namensschutz verhindert, dass Nicht-Windows-Geräte die DNS-Registrierungen von Windows-Geräten überschreiben."
        },
    
        // Questions on DHCP Advanced Options
        {
            question: "162. Welche Zuweisungskriterien gibt es für richtlinienbasierte DHCP-Zuweisungen?",
            answers: [
                "Herstellerklasse, Benutzerklasse, MAC-Adresse, FQDN, Relay-Agent-Informationen",
                "IP-Adresse und Subnetzmaske",
                "Betriebssystemtyp und Prozessorgeschwindigkeit",
                "Anzahl der Verbindungen"
            ],
            correct: ["Herstellerklasse, Benutzerklasse, MAC-Adresse, FQDN, Relay-Agent-Informationen"],
            explanation: "Richtlinienbasierte Zuweisungen ermöglichen es, IP-Adressen je nach Gerätetyp, Benutzer oder Standort zu vergeben."
        },
        {
            question: "163. Was ist ein DHCP-Bereich?",
            answers: [
                "Eine Gruppe von IP-Adressen, die an Clients vergeben werden können.",
                "Ein isolierter Netzwerkabschnitt.",
                "Ein spezifisches Subnetz für DNS-Anfragen.",
                "Ein virtueller Bereich für Testzwecke."
            ],
            correct: ["Eine Gruppe von IP-Adressen, die an Clients vergeben werden können."],
            explanation: "Ein DHCP-Bereich definiert den IP-Adressenbereich, der an Clients innerhalb eines bestimmten Netzwerks vergeben werden kann."
        },
        {
            question: "164. Warum ist eine statische IP-Adresse für den DHCP-Server wichtig?",
            answers: [
                "Damit der DHCP-Server immer über eine konstante Adresse erreichbar ist.",
                "Weil sie die Serverleistung verbessert.",
                "Weil sie die Bandbreite erhöht.",
                "Weil sie die DNS-Abfragen beschleunigt."
            ],
            correct: ["Damit der DHCP-Server immer über eine konstante Adresse erreichbar ist."],
            explanation: "Eine statische IP-Adresse stellt sicher, dass der DHCP-Server für alle Clients zuverlässig erreichbar ist."
        },

        ],
       ITSicherheit:
        [
            {
                question: "1. Warum wird IT-Sicherheit in Unternehmen immer wichtiger?",
                answers: [
                    "Durch die zunehmende Vernetzung und steigende Anzahl an Sicherheitslücken.",
                    "Wegen der niedrigen Anschaffungskosten für Sicherheitssysteme.",
                    "Weil alle Systeme automatisch sicher sind.",
                    "Weil die Sicherheitssoftware leicht zu bedienen ist."
                ],
                correct: ["Durch die zunehmende Vernetzung und steigende Anzahl an Sicherheitslücken."],
                explanation: "IT-Sicherheit gewinnt an Bedeutung, da immer mehr Systeme vernetzt sind und Sicherheitslücken Angriffsflächen bieten."
            },
            {
                question: "2. Was versteht man unter Exploits?",
                answers: [
                    "Schwachstellen in Software, die von Angreifern ausgenutzt werden können.",
                    "Eine Methode zur Verbesserung der Netzwerkgeschwindigkeit.",
                    "Ein neuer Sicherheitstrend.",
                    "Spezielle Virenscanner zur Abwehr von Angriffen."
                ],
                correct: ["Schwachstellen in Software, die von Angreifern ausgenutzt werden können."],
                explanation: "Exploits sind bekannte Sicherheitslücken in Software, die es Angreifern ermöglichen, Systeme zu kompromittieren."
            },
        
            // Questions on Safety and Security Aspects
            {
                question: "3. Was ist unter dem Begriff Verfügbarkeit im Kontext der IT-Sicherheit zu verstehen?",
                answers: [
                    "Die Gewährleistung, dass Daten und Systeme jederzeit zugänglich sind.",
                    "Der Schutz von Daten vor unbefugtem Zugriff.",
                    "Eine Verschlüsselungstechnik.",
                    "Eine Strategie zur Erhöhung der Internetgeschwindigkeit."
                ],
                correct: ["Die Gewährleistung, dass Daten und Systeme jederzeit zugänglich sind."],
                explanation: "Verfügbarkeit bedeutet, dass Daten und Systeme jederzeit genutzt werden können, ohne dass es zu Ausfällen kommt.."
            },
            {
                question: "4. Was versteht man unter Vertraulichkeit in der IT-Sicherheit?",
                answers: [
                    "Schutz gegen unbefugtes Abhören und Zugriff auf Informationen.",
                    "Einen hohen Grad an Netzwerkverfügbarkeit.",
                    "Die Fähigkeit, Netzwerkausfälle zu erkennen.",
                    "Das Erstellen von Netzwerksicherungen."
                ],
                correct: ["Schutz gegen unbefugtes Abhören und Zugriff auf Informationen."],
                explanation: "Vertraulichkeit bezieht sich auf den Schutz von Informationen vor unautorisiertem Zugriff und Abhören."
            },
            {
                question: "5. Welche Aufgabe hat die Authentifizierung?",
                answers: [
                    "Überprüfung der Identität eines Benutzers oder Systems.",
                    "Schutz vor Datenverlust.",
                    "Optimierung der Systemleistung.",
                    "Gewährleistung der Systemverfügbarkeit."
                ],
                correct: ["Überprüfung der Identität eines Benutzers oder Systems."],
                explanation: "Authentifizierung prüft, ob der Kommunikationspartner tatsächlich der ist, der er vorgibt zu sein."
            },
        
            // Questions on Data Backup Concepts
            {
                question: "6. Welche Backupmethode erfordert nur das Zurückspielen der letzten Sicherung?",
                answers: [
                    "Vollsicherung",
                    "Inkrementelle Sicherung",
                    "Differentielle Sicherung",
                    "Wöchentliche Sicherung"
                ],
                correct: ["Vollsicherung"],
                explanation: "Bei einer Vollsicherung werden alle Daten vollständig gesichert, sodass für die Wiederherstellung nur die letzte Sicherung nötig ist."
            },
            {
                question: "7. Was wird bei einer inkrementellen Sicherung gespeichert?",
                answers: [
                    "Nur die seit der letzten Sicherung geänderten oder neuen Dateien.",
                    "Alle Daten, unabhängig von Änderungen.",
                    "Nur die Daten, die ein Jahr alt sind.",
                    "Die komplette Systemkonfiguration."
                ],
                correct: ["Nur die seit der letzten Sicherung geänderten oder neuen Dateien."],
                explanation: "Die inkrementelle Sicherung speichert nur Änderungen seit der letzten Sicherung und ist platzsparender."
            },
            {
                question: "8. Was beschreibt das Generationenprinzip bei der Datensicherung?",
                answers: [
                    "Mehrere Generationen von Backups werden aufbewahrt, z.B. Großvater-Vater-Sohn-Prinzip.",
                    "Nur die neueste Sicherung wird gespeichert.",
                    "Eine Sicherung, die alle zwei Jahre aktualisiert wird.",
                    "Ein Sicherungsprozess, der nur einmal durchgeführt wird."
                ],
                correct: ["Mehrere Generationen von Backups werden aufbewahrt, z.B. Großvater-Vater-Sohn-Prinzip."],
                explanation: "Das Generationenprinzip sichert Daten in verschiedenen Abstufungen, um Datenversionen auf verschiedenen Ebenen zu speichern."
            },
            
            // Questions on RAID and Redundancy
            {
                question: "9. Wofür wird ein RAID-System verwendet?",
                answers: [
                    "Zur Erhöhung der Datensicherheit und -verfügbarkeit durch Redundanz.",
                    "Zur Sicherung einzelner Dateien.",
                    "Zur Optimierung der Netzwerkgeschwindigkeit.",
                    "Zur Verwaltung von Nutzerdaten."
                ],
                correct: ["Zur Erhöhung der Datensicherheit und -verfügbarkeit durch Redundanz."],
                explanation: "RAID-Systeme nutzen redundante Festplattenkonfigurationen, um die Verfügbarkeit und Sicherheit von Daten zu gewährleisten."
            },
        
            // Additional Topics in IT Security and Network Safety
            {
                question: "10. Was versteht man unter einer Sicherheitslücke?",
                answers: [
                    "Eine Schwachstelle in Systemen oder Anwendungen, die ausgenutzt werden kann.",
                    "Eine erhöhte Netzwerkkapazität.",
                    "Ein zusätzlicher Schutzmechanismus.",
                    "Ein Verfahren zur Optimierung von Datensicherungen."
                ],
                correct: ["Eine Schwachstelle in Systemen oder Anwendungen, die ausgenutzt werden kann."],
                explanation: "Sicherheitslücken entstehen durch unzureichend geschützte Systeme und können von Angreifern ausgenutzt werden."
            },
            {
                question: "11. Welche Backupstrategie sichert täglich geänderte Daten und wöchentlich eine Vollsicherung?",
                answers: [
                    "Das Generationenprinzip",
                    "Die inkrementelle Sicherung",
                    "Die differentielle Sicherung",
                    "Die tägliche Vollsicherung"
                ],
                correct: ["Die inkrementelle Sicherung"],
                explanation: "Inkrementelle Sicherungen sichern nur tägliche Änderungen und werden oft in Kombination mit einer wöchentlichen Vollsicherung eingesetzt."
            },
            {
                question: "12. Warum sind strukturelle Datensicherungskonzepte wichtig?",
                answers: [
                    "Sie gewährleisten ein standardisiertes und abgestimmtes Vorgehen bei der Datensicherung.",
                    "Sie reduzieren die Größe des Netzwerks.",
                    "Sie ermöglichen den Zugang zu gesperrten Dateien.",
                    "Sie verhindern Hardwaredefekte."
                ],
                correct: ["Sie gewährleisten ein standardisiertes und abgestimmtes Vorgehen bei der Datensicherung."],
                explanation: "Ein strukturiertes Konzept definiert alle Aspekte der Datensicherung, um den Prozess klar und abgestimmt umzusetzen."
            },
            {
                question: "13. Wann sollte eine Notfallübung durchgeführt werden?",
                answers: [
                    "Regelmäßig, um die Effizienz der Notfallpläne zu testen.",
                    "Nur nach einem Vorfall.",
                    "Nur einmal im Jahr.",
                    "Immer dann, wenn neue Mitarbeiter eingestellt werden."
                ],
                correct: ["Regelmäßig, um die Effizienz der Notfallpläne zu testen."],
                explanation: "Notfallübungen sollten regelmäßig durchgeführt werden, um die Effektivität der Notfallmaßnahmen sicherzustellen."
            },
            {
                question: "14. Was ist DAS?",
                answers: [
                    "Direct Attached Storage, physisch mit einem Server verbunden.",
                    "Network Attached Storage, mit dediziertem Netzwerk verbunden.",
                    "Storage Area Network, mit zentraler Speicherverwaltung.",
                    "Cloud-Speicherlösung, extern gehostet."
                ],
                correct: ["Direct Attached Storage, physisch mit einem Server verbunden."],
                explanation: "DAS (Direct Attached Storage) ist direkt an einen Server angeschlossen und bietet eine einfache, kostengünstige Speicherlösung."
            },
            {
                question: "15. Was ist ein Nachteil von DAS(Direct Attached Storage)?",
                answers: [
                    "Wenig Flexibilität bei der Zuweisung.",
                    "Hohe Kosten für die Implementierung.",
                    "Komplexe Konfiguration.",
                    "Erfordert eine Netzwerkverbindung."
                ],
                correct: ["Wenig Flexibilität bei der Zuweisung."],
                explanation: "DAS ist weniger flexibel, da es an einen einzelnen Server gebunden ist und keine einfache Erweiterung ermöglicht."
            },
            
            // Questions on NAS Storage
            {
                question: "16. Welche Vorteile bietet NAS?",
                answers: [
                    "Zentraler Speicher zu erschwinglichem Preis.",
                    "Kürzere Zugriffszeiten als bei DAS.",
                    "Hohe Redundanz und Flexibilität.",
                    "Komplexe Einrichtung erfordert."
                ],
                correct: ["Zentraler Speicher zu erschwinglichem Preis."],
                explanation: "NAS bietet eine kostengünstige Möglichkeit, zentralen Speicher bereitzustellen, der über das Netzwerk erreichbar ist."
            },
            {
                question: "17. In welchem Fall ist NAS(Storage Area Network) weniger geeignet?",
                answers: [
                    "Für Großunternehmen mit hohem Datenverkehr.",
                    "Für kleine Büros mit geringer Speicherkapazität.",
                    "Für private Cloud-Lösungen.",
                    "Für verteilte Backups."
                ],
                correct: ["Für Großunternehmen mit hohem Datenverkehr."],
                explanation: "NAS eignet sich weniger für Großunternehmen mit hohem Datenverkehr, da die Zugriffszeiten bei großem Datenvolumen langsamer sein können."
            },
        
            // Questions on SAN Storage
            {
                question: "18. Was ist ein SAN?",
                answers: [
                    "Ein Storage Area Network, das hohe Verfügbarkeit und Flexibilität bietet.",
                    "Ein Direct Attached Storage, das direkt mit dem Server verbunden ist.",
                    "Eine lokale Festplatte auf dem Server.",
                    "Eine dedizierte Backup-Lösung."
                ],
                correct: ["Ein Storage Area Network, das hohe Verfügbarkeit und Flexibilität bietet."],
                explanation: "SAN (Storage Area Network) ist ein Netzwerk aus Speichern mit hoher Verfügbarkeit und flexibler Speicherzuweisung."
            },
            {
                question: "19. Welche Implementierungsarten gibt es für SAN (Storage Area Network)?",
                answers: [
                    "Fibre Channel und iSCSI(Internet Small Computer System Interface).",
                    "Direct Connection und Ethernet.",
                    "NAS:Network Attached Storage und DAS: Direct Attached Storage.",
                    "Cloud und lokal."
                ],
                correct: ["Fibre Channel und iSCSI(Internet Small Computer System Interface)."],
                explanation: "SAN kann über Fibre Channel oder iSCSI realisiert werden, wodurch es eine flexible und leistungsstarke Lösung darstellt."
            },
        
            // Comparison and Use Cases for Storage Solutions
            {
                question: "20. Welches Speichersystem bietet die höchste Flexibilität und Verfügbarkeit?",
                answers: [
                    "SAN:Storage Area Network",
                    "DAS:Direct Attached Storage",
                    "NAS: Network Attached Storage",
                    "Cloud-Speicher"
                ],
                correct: ["SAN"],
                explanation: "SAN-Systeme bieten die größte Flexibilität und Verfügbarkeit, da sie speziell für den Unternehmensbedarf ausgelegt sind."
            },
            {
                question: "21. Welche Lösung eignet sich am besten für eine kostengünstige Speichererweiterung in einem kleinen Büro?",
                answers: [
                    "NAS",
                    "SAN",
                    "DAS",
                    "Fibre Channel"
                ],
                correct: ["NAS"],
                explanation: "NAS ist die ideale Wahl für kleinere Büros, die eine kostengünstige, zentralisierte Speicherlösung benötigen."
            },
        
            // Questions on Specific Technologies and Protocols
            {
                question: "22. Was ist Fibre Channel?",
                answers: [
                    "Ein Hochgeschwindigkeitsnetzwerkprotokoll für SAN-Implementierungen.",
                    "Ein Protokoll für Dateizugriff in NAS-Systemen.",
                    "Eine Methode zur Cloud-Speicherung.",
                    "Eine Software zur Speicherverwaltung."
                ],
                correct: ["Ein Hochgeschwindigkeitsnetzwerkprotokoll für SAN-Implementierungen."],
                explanation: "Fibre Channel wird in SAN-Netzwerken verwendet und ermöglicht Hochgeschwindigkeitsdatenübertragung."
            },
            {
                question: "23. Welche Funktion hat iSCSI (Internet Small Computer System Interface)?",
                answers: [
                    "Es ermöglicht SAN über TCP/IP-Netzwerke.",
                    "Es stellt NAS-Ordner bereit.",
                    "Es ist ein Backup-Protokoll.",
                    "Es verwaltet NAS-Berechtigungen."
                ],
                correct: ["Es ermöglicht SAN über TCP/IP-Netzwerke."],
                explanation: "iSCSI ist ein Protokoll, das es ermöglicht, SAN-Storage über IP-basierte Netzwerke bereitzustellen, wodurch es flexibler ist."
            },
            {
                question: "24. Was ist der Vorteil von Fibre Channel over Ethernet (FCoE)?",
                answers: [
                    "Es vereint die Vorteile von Fibre Channel und Ethernet.",
                    "Es ist günstiger als iSCSI.",
                    "Es erfordert keine spezielle Hardware.",
                    "Es wird nur für kleine Netzwerke verwendet."
                ],
                correct: ["Es vereint die Vorteile von Fibre Channel und Ethernet."],
                explanation: "FCoE integriert Fibre Channel in Ethernet, was eine höhere Effizienz und geringere Infrastrukturkosten ermöglicht."
            },
        
            // Questions on Advanced Storage Concepts
            {
                question: "25. Wofür steht MPIO(Multi-Path Input/Output) in Speicherlösungen?",
                answers: [
                    "Multipath I/O, ermöglicht mehrere Pfade zu einem Speicherziel.",
                    "Managed Protocol for Input Output.",
                    "Main Partition Input Output.",
                    "Media Partition Input Optimization."
                ],
                correct: ["Multipath I/O, ermöglicht mehrere Pfade zu einem Speicherziel."],
                explanation: "MPIO ermöglicht redundante Verbindungen zu Speichern, was die Zuverlässigkeit und Leistung erhöht."
            },
            {
                question: "26. Welche Rolle spielt iSNS(Internet Storage Name Service) in einem SAN (Storage Attached Network?",
                answers: [
                    "Es ermöglicht die Verwaltung und Registrierung von iSCSI-Zielen.",
                    "Es beschleunigt die Netzwerkgeschwindigkeit.",
                    "Es verwaltet Fibre Channel Verbindungen.",
                    "Es sorgt für automatische Backups."
                ],
                correct: ["Es ermöglicht die Verwaltung und Registrierung von iSCSI-Zielen."],
                explanation: "iSNS (Internet Storage Name Service) erleichtert die Verwaltung und das Auffinden von iSCSI-Zielen in einem SAN."
            },
        
            // Additional Topics on Storage Setup in Windows Server
            {
                question: "27. Welche Speichertypen werden häufig in Windows Server 2016 konfiguriert?",
                answers: [
                    "Freigaben für NAS und SAN.",
                    "Cloud-Speicher und Backup-Volumes.",
                    "Interne Festplattenpartitionen.",
                    "Netzwerkfreigaben und Benutzerprofile."
                ],
                correct: ["Freigaben für NAS und SAN."],
                explanation: "In Windows Server 2016 können Speicherlösungen wie NAS (Network Attached Storage) und SAN (Storage Area Network) über Freigaben und Berechtigungen konfiguriert werden."
            },
            {
                question: "28. Warum sollten Unternehmen IPv6 in Betracht ziehen?",
                answers: [
                    "Wegen der bevorstehenden Ausschöpfung des IPv4-Adressraums.",
                    "Weil IPv6 einfacher zu konfigurieren ist.",
                    "Da IPv6 keine Sicherheitslücken hat.",
                    "Weil IPv6 günstiger ist als IPv4."
                ],
                correct: ["Wegen der bevorstehenden Ausschöpfung des IPv4-Adressraums."],
                explanation: "IPv6 ist notwendig, da die Anzahl der IPv4-Adressen begrenzt ist und das Internet stetig wächst."
            },
            {
                question: "29. Worin unterscheidet sich IPv6 von IPv4 in Bezug auf die Adressstruktur?",
                answers: [
                    "IPv6-Adressen sind 128-Bit-Adressen.",
                    "IPv4-Adressen sind 128-Bit-Adressen.",
                    "IPv6-Adressen sind 32-Bit-Adressen.",
                    "IPv4-Adressen können in Hexadezimal dargestellt werden."
                ],
                correct: ["IPv6-Adressen sind 128-Bit-Adressen."],
                explanation: "IPv6-Adressen bestehen aus 128 Bit, wodurch eine größere Anzahl an Adressen möglich ist als bei IPv4."
            },
            {
                question: "30. Was sind die Hauptadressentypen in IPv6?",
                answers: [
                    "Unicast, Multicast, und Anycast",
                    "Broadcast, Multicast und Anycast",
                    "Unicast und Broadcast",
                    "Nur Multicast und Unicast"
                ],
                correct: ["Unicast, Multicast, und Anycast"],
                explanation: "IPv6 verwendet Unicast für individuelle Kommunikation, Multicast für Gruppenkommunikation und Anycast für die nächstgelegene Adresse."
            },
        
            // Questions on IPv6 Autoconfiguration and Tools
            {
                question: "31. Welche Autokonfigurationsmethoden unterstützt IPv6?",
                answers: [
                    "SLAAC (Stateless Address Autoconfiguration) und DHCPv6",
                    "Nur DHCPv6",
                    "Nur statische Adressvergabe",
                    "IPSec und DHCP"
                ],
                correct: ["SLAAC und DHCPv6"],
                explanation: "IPv6 unterstützt die automatische Konfiguration über SLAAC und DHCPv6 für Netzwerke ohne manuelle Konfiguration."
            },
            {
                question: "32. Welche Werkzeuge können zur IPv6-Konfiguration verwendet werden?",
                answers: [
                    "Netsh, Windows PowerShell Cmdlets, und TCP/IPv6-Eigenschaften",
                    "Nur Windows PowerShell",
                    "Nur Netsh",
                    "Nur manuelle Adressierung"
                ],
                correct: ["Netsh, Windows PowerShell Cmdlets, und TCP/IPv6-Eigenschaften"],
                explanation: "IPv6 lässt sich mithilfe von Netsh, PowerShell und den Eigenschaften der TCP/IPv6-Komponente konfigurieren."
            },
        
            // Questions on IPv6 and IPv4 Coexistence
            {
                question: "33. Was ist eine duale IP-Layer-Architektur?",
                answers: [
                    "Eine Architektur, die IPv4 und IPv6 im selben Protokollstapel unterstützt.",
                    "Ein Netzwerkprotokoll nur für IPv6.",
                    "Eine Architektur, die IPv6 ausschließt.",
                    "Eine Architektur, die ausschließlich IPv4 verwendet."
                ],
                correct: ["Eine Architektur, die IPv4 und IPv6 im selben Protokollstapel unterstützt."],
                explanation: "Die duale IP-Layer-Architektur ermöglicht die gleichzeitige Nutzung von IPv4 und IPv6 im selben Netzwerk."
            },
            {
                question: "34. Welche DNS-Einträge werden für die IPv4- und IPv6-Koexistenz benötigt?",
                answers: [
                    "A-, AAAA- und PTR-Einträge",
                    "Nur A- und PTR-Einträge",
                    "Nur PTR- und MX-Einträge",
                    "Nur AAAA- und CNAME-Einträge"
                ],
                correct: ["A-, AAAA- und PTR-Einträge"],
                explanation: "Für die IPv4- und IPv6-Koexistenz sind A-Einträge für IPv4, AAAA-Einträge für IPv6 und PTR-Einträge für die Reverse Lookup erforderlich."
            },
        
            // Questions on IPv6 Transition Technologies
            {
                question: "35. Was ist ISATAP(Intra-Site Automatic Tunnel Addressing Protocol)?",
                answers: [
                    "Eine Technik, die IPv6-Kommunikation über ein IPv4-Intranet ermöglicht.",
                    "Ein VPN-Protokoll.",
                    "Eine Datenverschlüsselungstechnik.",
                    "Ein DNS-Weiterleitungsprotokoll."
                ],
                correct: ["Eine Technik, die IPv6-Kommunikation über ein IPv4-Intranet ermöglicht."],
                explanation: "ISATAP(Intra-Site Automatic Tunnel Addressing Protocol) ermöglicht die Nutzung von IPv6 über ein IPv4-Intranet, indem IPv4-Adressen in IPv6-Adressen eingebettet werden."
            },
            {
                question: "36. Wofür steht Teredo?",
                answers: [
                    "Ein Protokoll zur Ermöglichung von IPv6-Konnektivität über IPv4 und NAT.",
                    "Ein Verschlüsselungsalgorithmus.",
                    "Eine Backup-Strategie.",
                    "Ein IP-Verwaltungsprotokoll."
                ],
                correct: ["Ein Protokoll zur Ermöglichung von IPv6-Konnektivität über IPv4 und NAT."],
                explanation: "Teredo ermöglicht die Verbindung von IPv6-Hosts über IPv4-Netzwerke, einschließlich NAT."
            },
            {
                question: "37. Was ist 6 to 4?",
                answers: [
                    "Ein Tunneling-Protokoll, das IPv6-Verkehr über das IPv4-Internet sendet.",
                    "Ein IPv4-zu-IPv6-Konverter.",
                    "Ein Routerprotokoll.",
                    "Ein Firewallschutz."
                ],
                correct: ["Ein Tunneling-Protokoll, das IPv6-Verkehr über das IPv4-Internet sendet."],
                explanation: "6to4 ist ein Tunneling-Protokoll, das IPv6-Daten über ein IPv4-Netzwerk transportiert, indem es IPv4-Adressinformationen in die IPv6-Adresse integriert."
            },
        
            // Advanced Configuration and Transition Options
            {
                question: "38. Was macht PortProxy?",
                answers: [
                    "Es stellt Zugriff von IPv6-Hosts auf IPv4-Anwendungen bereit.",
                    "Es verschlüsselt IPv6-Datenverkehr.",
                    "Es optimiert DNS-Anfragen.",
                    "Es konvertiert IPv6-Adressen in IPv4-Adressen."
                ],
                correct: ["Es stellt Zugriff von IPv6-Hosts auf IPv4-Anwendungen bereit."],
                explanation: "PortProxy ermöglicht IPv6-Hosts den Zugriff auf IPv4-Anwendungen und stellt so eine Verbindung zwischen den beiden Protokollen her."
            },
            {
                question: "39. Was ist der Unterschied zwischen ISATAP und Teredo?",
                answers: [
                    "ISATAP ist für IPv4-Intranets, Teredo für NAT-Umgebungen.",
                    "ISATAP ist schneller als Teredo.",
                    "Teredo ist nur für öffentliche Netzwerke.",
                    "ISATAP verschlüsselt den Datenverkehr, Teredo nicht."
                ],
                correct: ["ISATAP ist für IPv4-Intranets, Teredo für NAT-Umgebungen."],
                explanation: "ISATAP ermöglicht IPv6-Kommunikation über IPv4-Intranets, während Teredo speziell für die Kommunikation über NAT geeignet ist."
            },
        
            // Planning and Implementing Native IPv6 Environments
            {
                question: "40. Was sollte bei der Planung einer nativen IPv6-Umgebung berücksichtigt werden?",
                answers: [
                    "Unterstützung durch Betriebssysteme, Router, Netzwerkgeräte und Anwendungen.",
                    "Ausschließlich die Routerkonfiguration.",
                    "Nur die DNS-Server-Einstellungen.",
                    "Nur die IPv4-Unterstützung der Netzwerkgeräte."
                ],
                correct: ["Unterstützung durch Betriebssysteme, Router, Netzwerkgeräte und Anwendungen."],
                explanation: "Eine native IPv6-Umgebung erfordert, dass alle Komponenten im Netzwerk IPv6 unterstützen, einschließlich Betriebssysteme und Geräte."
            },
            {
                question: "41. Welche Netzwerkelemente müssen für den Übergang auf IPv6 aktualisiert werden?",
                answers: [
                    "DNS-Einträge, Routinginfrastruktur und Hosts.",
                    "Nur die Hosts.",
                    "Nur die Router.",
                    "Nur die Server."
                ],
                correct: ["DNS-Einträge, Routinginfrastruktur und Hosts."],
                explanation: "Für einen vollständigen IPv6-Übergang müssen alle relevanten Komponenten, einschließlich DNS, Router und Hosts, IPv6-fähig sein."
            }
        ],

};
// Quiz logic and functions
let selectedCategory = '';
let currentQuestionIndex = 0;
let questions = [];
let correctAnswersCount = 0;
let incorrectAnswersCount = 0;
let masteredQuestions = [];
let needsPracticeQuestions = []; // For tracking incorrect answers
let questionsLimit = 20;

// Shuffle function to randomize questions
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start quiz and select category
document.getElementById('start-btn').addEventListener('click', () => {
    const categorySelect = document.getElementById('category-select');
    selectedCategory = categorySelect.value;

    // Select questions based on category and shuffle
    if (selectedCategory === "general") {
        questions = shuffle([
            ...questionsByCategory["networking"],
            ...questionsByCategory["command"],
            ...questionsByCategory["OSI"],
            ...questionsByCategory["numberSystem"],
            ...questionsByCategory["SwitchingAlgebra"],
            ...questionsByCategory["Protocol"],
            ...questionsByCategory["IPADD"],
            ...questionsByCategory["ITSicherheit"]
        ]);
    } else {
        questions = shuffle([...questionsByCategory[selectedCategory]]);
    }

    // Limit questions to 30
    questions = questions.slice(0, questionsLimit);

    // Hide category selection and show question container
    document.querySelector('.category-select').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    document.getElementById('submit-btn').classList.remove('hidden');
    loadQuestion();
});

// Load each question in sequence
function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionElement = questionContainer.querySelector('.question');
    const answersElement = questionContainer.querySelector('.answers');

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    // Shuffle answers and display
    const shuffledAnswers = shuffle([...currentQuestion.answers]);
    answersElement.innerHTML = '';
    shuffledAnswers.forEach(answer => {
        answersElement.innerHTML += `
            <label>
                <input type="checkbox" name="answer" value="${answer}">
                ${answer}
            </label>
        `;
    });

    document.getElementById('result').innerText = '';
    document.getElementById('explanation').style.display = 'none';
    document.getElementById('incorrect-explanations').style.display = 'none';
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('prev-btn').classList.toggle('hidden', currentQuestionIndex === 0);
}

// Check answers and provide explanations
function checkAnswers() {
    const selectedAnswers = [...document.querySelectorAll('input[name="answer"]:checked')].map(checkbox => checkbox.value);
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswers.length === currentQuestion.correct.length &&
        selectedAnswers.every(answer => currentQuestion.correct.includes(answer));

    const resultElement = document.getElementById('result');
    const explanationElement = document.getElementById('explanation');
    const explanationText = document.getElementById('explanation-text');
    const incorrectExplanationsElement = document.getElementById('incorrect-explanations');
    const incorrectExplanationText = document.getElementById('incorrect-explanation-text');

    explanationText.innerText = currentQuestion.explanation;
    explanationElement.style.display = 'block';

    // Show the next button regardless of whether the answer is correct
    document.getElementById('next-btn').classList.remove('hidden');

    if (isCorrect) {
        correctAnswersCount++;
        resultElement.innerText = "Richtig!";
        masteredQuestions.push(currentQuestion.question);
    } else {
        incorrectAnswersCount++;
        resultElement.innerText = "Falsch!";
        needsPracticeQuestions.push(currentQuestion.question);
        const incorrectExplanations = Object.entries(currentQuestion.incorrectExplanations).map(([answer, explanation]) => `${answer}: ${explanation}`).join('<br>');
        incorrectExplanationText.innerHTML = incorrectExplanations;
        incorrectExplanationsElement.style.display = 'block'; // Show incorrect explanations
    }

    updateMasteryStatus();
    document.getElementById('next-btn').classList.remove('hidden'); // Always show Next button
}

// Update mastery status after each question
function updateMasteryStatus() {
    const masteryElement = document.getElementById('mastery-status');
    const masteryText = document.getElementById('mastery-text');
    masteryText.innerText = `Richtige Antworten: ${correctAnswersCount} / ${currentQuestionIndex + 1}`;
    masteryElement.classList.remove('hidden');
}

// Handle the next question
document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Handle the previous question
document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

// Show quiz results and review questions
function showResults() {
    const progressSummary = document.getElementById('progress-summary');
    const correctCountElement = document.getElementById('correct-count');
    const incorrectCountElement = document.getElementById('incorrect-count');
    const masteredQuestionsElement = document.getElementById('mastered-questions');
    const needsPracticeQuestionsElement = document.getElementById('needs-practice-questions');
    const percentageScoreElement = document.getElementById('percentage-score');

    correctCountElement.innerText = `Richtige Antworten: ${correctAnswersCount}`;
    incorrectCountElement.innerText = `Falsche Antworten: ${incorrectAnswersCount}`;
    masteredQuestionsElement.innerText = `Meisterhafte Fragen: ${masteredQuestions.length}`;
    needsPracticeQuestionsElement.innerText = `Fragen, die Übung benötigen: ${needsPracticeQuestions.length}`;
    const percentageScore = ((correctAnswersCount / questions.length) * 100).toFixed(2);
    percentageScoreElement.innerText = `Punktzahl: ${percentageScore}%`;

    progressSummary.classList.remove('hidden');
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('submit-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('prev-btn').classList.add('hidden');
}

// Navigate back to the main page
document.getElementById('main-page-btn').addEventListener('click', () => {
    // Reset all quiz-related variables
    selectedCategory = '';
    currentQuestionIndex = 0;
    questions = [];
    correctAnswersCount = 0;
    incorrectAnswersCount = 0;
    masteredQuestions = [];
    needsPracticeQuestions = [];

    // Show category selection and hide quiz elements
    document.querySelector('.category-select').classList.remove('hidden');
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('submit-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('prev-btn').classList.add('hidden');
    document.getElementById('progress-summary').classList.add('hidden');
});

// Submit answer for each question
document.getElementById('submit-btn').addEventListener('click', checkAnswers);

