import Jugador;
class Equipo{
    public String NombreEquipo;
    public String Categoria;
    public  Jugador [] jugadores = new Jugador[];

    public Equipo(String nombre, String categoria, Jugador jugador)
    {
        this.NombreEquipo = nombre;
        this.Categoria = categoria;
        this.jugadores = jugador;
    }

    public String getNombreEquipo()
    {
        return this.NombreEquipo;
    }

    public void setNombreEquipo(String nombre)
    {
        this.NombreEquipo = nombre;
    }

    public String getCategoria(){
        return this.categoria;
    }

    public void setCategoria(String categoria)
    {
        this.Categoria = categoria;
        
    }

    public void setJugadores(Jugador jugador)
    {
        this.jugadores[] = jugador
    }
    public Jugador[] getJugadores()
    {
        return this.jugadores
    }

    public void imprimir()
    {
        for(int i=0; i<this.jugadores.length ; i++)
            {
                this.jugadores[i].imprimir();
            }

    }
}