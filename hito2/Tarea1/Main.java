public class Main {
    public static void main(String[] args)
    {
        Jugador jugador1 = new Jugador("jugafor1", "appellido", "234234w", 12);

        Jugador[] jugadores = new Jugador[2];
        jugadores[0]= jugador1;

        Equipo equipo1 = new Equipo("losaguilas", "varones", jugadores);
        Equipo[] equipos = new Equipo[];
        equipos[0] = equipo1;

        Campeonato campeonato = new Campeonato("camp UNIFRANZ", equipos);
        campeonato.imprimir();

    }
}