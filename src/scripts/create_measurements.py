import numpy as np
from datetime import datetime, timedelta

# Parâmetros para simulação
num_samples = 120
time_interval = 1  # intervalo de tempo em segundos
base_current = 0.5  # valor médio de corrente em Ampères
base_voltage = 220  # valor médio de tensão em Volts
current_variation = 0.2  # variação de corrente
voltage_variation = 10  # variação de tensão
circuit_id = 8  # ID do circuito (altere conforme necessário)

# Gerando variações aleatórias realistas para corrente e tensão
current_values = np.random.normal(loc=base_current, scale=current_variation, size=num_samples)
voltage_values = np.random.normal(loc=base_voltage, scale=voltage_variation, size=num_samples)

# Criando strings para as inserções de corrente e tensão
current_inserts = []
voltage_inserts = []

# Obtendo a hora atual para criar timestamps
current_time = datetime.now()

# Simulando medições instantâneas e criando as inserções SQL
for i in range(num_samples):
    current_measurement = current_values[i]
    voltage_measurement = voltage_values[i]

    # Formatando o timestamp
    timestamp = current_time.strftime('%Y-%m-%d %H:%M:%S')

    current_inserts.append(f"({circuit_id}, {current_measurement:.5f}, '{timestamp}')")
    voltage_inserts.append(f"({circuit_id}, {voltage_measurement:.5f}, '{timestamp}')")

    # Atualizando o tempo para a próxima medição
    current_time += timedelta(seconds=time_interval)

# Unindo as inserções em strings SQL completas
current_sql = f"INSERT INTO currents (circuit_id, current_measurement, timestamp) VALUES {', '.join(current_inserts)};"
voltage_sql = f"INSERT INTO voltages (circuit_id, voltage_measurement, timestamp) VALUES {', '.join(voltage_inserts)};"

# Imprimindo as inserções SQL
print("-- Query para inserção das medições de corrente:")
print(current_sql)
print("\n-- Query para inserção das medições de tensão:")
print(voltage_sql)

