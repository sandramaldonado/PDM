import Equipo;
class Campeonato{
    public String nombreCampeonto;
    public Equipo equipos = new Equipo[];

    public Campeonato(String nombre, Equipo equipo)
    {
        this.nombreCampeonto = nombre;
        this.equipos = equipo;
    }

    public String getNombreCampeonato()
    {
        return this.nombreCampeonto;
    }

    public void setNombreCampeonato(String nombre)
    {
        this.nombreCampeonto = nombre;
    }

    public Equipo[] getEquipo()
    {
        return this.equipos;
    }

    public void setEquipo(Equipo equipo)
    {
        this.equipo = equipo;
    }

    public void imprimir()
    {
        for(int i=0;i<this.equipo.length ; i++)
            {
                this.equipos[i].imprimir();
            }
    }
}